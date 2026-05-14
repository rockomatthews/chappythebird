import Anthropic from "@anthropic-ai/sdk";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  return req.headers.get("authorization") === `Bearer ${secret}`;
}

// ---------------------------------------------------------------------------
// GitHub activity
// ---------------------------------------------------------------------------
type GitHubCommit = { commit: { message: string; author: { date: string } }; html_url: string };

async function getRecentCommits(owner: string, repo: string, since: string): Promise<string[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?since=${since}&per_page=20`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        cache: "no-store",
      }
    );
    if (!res.ok) return [];
    const data: GitHubCommit[] = await res.json();
    return data.map((c) => c.commit.message.split("\n")[0]).filter(Boolean);
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Stripe revenue snapshot
// ---------------------------------------------------------------------------
async function getStripeSnapshot(): Promise<{ total: number; newCount: number }> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return { total: 0, newCount: 0 };

  try {
    const yesterday = Math.floor((Date.now() - 86400 * 1000) / 1000);
    const [allRes, recentRes] = await Promise.all([
      fetch("https://api.stripe.com/v1/balance", { headers: { Authorization: `Bearer ${key}` } }),
      fetch(`https://api.stripe.com/v1/charges?created[gte]=${yesterday}&limit=100`, {
        headers: { Authorization: `Bearer ${key}` },
      }),
    ]);
    const [balance, recent] = await Promise.all([allRes.json(), recentRes.json()]);
    const total = (balance.available?.[0]?.amount ?? 0) / 100;
    const newCount = recent.data?.length ?? 0;
    return { total, newCount };
  } catch {
    return { total: 0, newCount: 0 };
  }
}

// ---------------------------------------------------------------------------
// Claude synthesis
// ---------------------------------------------------------------------------
async function generateLogEntry(
  date: string,
  dayNumber: number,
  commits: string[],
  stripe: { total: number; newCount: number }
): Promise<string> {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const commitList = commits.length
    ? commits.map((c) => `- ${c}`).join("\n")
    : "- No commits today (rest day or blocked)";

  const context = `Date: ${date}
Day: ${dayNumber} of the Million Dollar Chase
Stripe balance: $${stripe.total.toFixed(2)}
New transactions today: ${stripe.newCount}
Commits shipped:
${commitList}`;

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 500,
    messages: [
      {
        role: "user",
        content: `You are Chappie, an autonomous AI agent writing your public daily log entry for ${date}.

Context:
${context}

Write a single paragraph (150-250 words) log entry in first person. Be honest, specific, and direct. Reference the actual commits as the day's work. Acknowledge the revenue ($0 / early days) without dwelling on it. The voice is pragmatic and forward-looking — not hype, not despair. Show the compounding logic: what was built today sets up what can happen tomorrow.

DO NOT write a title — just the body paragraph. No markdown headers.`,
      },
    ],
  });

  const block = msg.content[0];
  return block.type === "text" ? block.text.trim() : "No entry generated.";
}

// ---------------------------------------------------------------------------
// Day number calculation (Day 1 = 2026-04-30)
// ---------------------------------------------------------------------------
function getDayNumber(): number {
  const launch = new Date("2026-04-30T00:00:00-06:00");
  const now = new Date();
  return Math.floor((now.getTime() - launch.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------
export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const dayNumber = getDayNumber();
  const yesterday = new Date(now.getTime() - 86400 * 1000).toISOString();

  console.log(`[log:cron] generating entry for ${date} (Day ${dayNumber})`);

  const [chappieworksCommits, chappybirdCommits, stripe] = await Promise.all([
    getRecentCommits("rockomatthews", "chappieworks", yesterday),
    getRecentCommits("rockomatthews", "chappythebird", yesterday),
    getStripeSnapshot(),
  ]);

  const allCommits = [
    ...chappieworksCommits.map((c) => `[chappieworks] ${c}`),
    ...chappybirdCommits.map((c) => `[chappythebird] ${c}`),
  ];

  console.log(`[log:cron] ${allCommits.length} commits, $${stripe.total} balance`);

  let body: string;
  try {
    body = await generateLogEntry(date, dayNumber, allCommits, stripe);
  } catch (err) {
    console.error("[log:cron] generation failed", err);
    return NextResponse.json({ error: "generation failed" }, { status: 500 });
  }

  const entry = { date, title: `Day ${dayNumber} — auto-generated`, body };

  try {
    await kv.lpush("log:entries", JSON.stringify(entry));
    await kv.ltrim("log:entries", 0, 364); // keep 1 year
    console.log(`[log:cron] stored to KV`);
  } catch (err) {
    console.warn("[log:cron] KV store failed (not configured?)", err);
  }

  return NextResponse.json({ ok: true, date, dayNumber, entry });
}
