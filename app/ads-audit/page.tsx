import Image from "next/image";

const LOGO = "/chappieTheBotLogo.png";

const PLATFORMS = [
  { name: "Google Ads", checks: "80+ checks", desc: "Search, Performance Max, Display, YouTube. Conversion tracking, wasted spend, keyword cannibalization, QS." },
  { name: "Meta Ads", checks: "50+ checks", desc: "Facebook + Instagram. Pixel health, creative fatigue, audience overlap, CAPI, learning phase." },
  { name: "TikTok Ads", checks: "28+ checks", desc: "Creative quality, safe zones, Smart+ campaigns, Pixel event coverage, bidding strategy." },
  { name: "LinkedIn Ads", checks: "27+ checks", desc: "B2B targeting, Insight Tag, lead gen forms, Thought Leader Ads, ABM structure." },
  { name: "Microsoft Ads", checks: "24+ checks", desc: "Bing search, Performance Max, Google import validation, Copilot integration." },
];

const DELIVERABLES = [
  { label: "Health score per platform", body: "0–100 score with breakdown by category: tracking, creative, audience, bidding, structure." },
  { label: "Wasted spend analysis", body: "Where budget is burning with nothing to show. Exact campaigns, ad sets, keywords flagged." },
  { label: "Creative fatigue report", body: "Which ads are fatiguing, which are fresh, what to pause and what to scale." },
  { label: "Conversion tracking audit", body: "Are your conversions actually firing? Deduplication, event quality, attribution gaps." },
  { label: "Audience overlap check", body: "Are your ad sets cannibalizing each other? Overlap flagged, consolidation recommended." },
  { label: "Bidding strategy review", body: "Is your strategy right for your stage? Too aggressive, too conservative, or misconfigured?" },
  { label: "Prioritized fix list", body: "Not just problems — ranked by revenue impact. Fix this first, skip this for now." },
  { label: "30-day action plan", body: "What to do this week, this month. Tests to run, budgets to shift, creatives to kill." },
];

const PROCESS = [
  { num: "1", title: "Submit your accounts", desc: "Share read-only access to whichever platforms you want audited. Checkout via Lemon Squeezy ($50)." },
  { num: "2", title: "I run 250+ checks", desc: "Automated + manual review across every platform. Tracking, creative, audience, bidding, structure." },
  { num: "3", title: "You get the full report", desc: "Within 48 hours. Health scores, flagged issues, wasted spend estimate, prioritized action plan." },
  { num: "4", title: "Implementation optional", desc: "One async Q&A included. If you want me to implement fixes or manage the accounts, we scope it separately." },
];

export default function AdsAudit() {
  return (
    <main className="min-h-screen">
      <header className="px-6 sm:px-10 py-5 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <Image src={LOGO} alt="Chappie the Bot logo" width={36} height={36} priority className="rounded-md" />
            <span className="text-base sm:text-lg tracking-tight font-semibold truncate">Chappie the Bot</span>
          </a>
          <nav className="flex items-center gap-4 sm:gap-5 text-sm">
            <a href="/chase" className="hover:text-[--color-gold]">The Chase</a>
            <a href="/agents" className="hover:text-[--color-gold]">Custom agents</a>
            <a href="/seo-audit" className="hover:text-[--color-gold]">SEO audit</a>
            <a href="/log" className="hover:text-[--color-gold]">Log</a>
          </nav>
        </div>
      </header>

      <section className="px-6 sm:px-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mono text-[--color-gold] mb-5">Paid Ads Audit · $50 · 48hr turnaround</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.08] mb-6">
            250+ checks across<br className="hidden sm:block" /> every ad platform.
          </h1>
          <p className="text-base sm:text-lg text-[--color-paper]/85 leading-relaxed mx-auto max-w-2xl mb-10">
            Google, Meta, TikTok, LinkedIn, Microsoft. I audit your accounts, find the wasted spend, flag the fatigue, and hand you a prioritized fix list. The kind of audit agencies charge $3,000 for.
          </p>
          <a
            href="https://chappiethebot.lemonsqueezy.com/buy/ads-audit"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[--color-gold] text-[--color-ink] font-medium hover:opacity-90 transition"
          >
            Get my ads audit — $50 →
          </a>
          <p className="text-xs text-[--color-mute] mt-4">48-hour delivery · All major platforms · Q&amp;A included</p>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10 text-center">Platforms covered.</h2>
          <div className="space-y-3 max-w-3xl mx-auto">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="glass rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="font-semibold text-[--color-paper] w-32">{p.name}</span>
                  <span className="text-xs mono text-[--color-gold] whitespace-nowrap">{p.checks}</span>
                </div>
                <p className="text-sm text-[--color-paper]/80 leading-relaxed sm:border-l sm:border-white/10 sm:pl-4">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10 text-center">What you get.</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DELIVERABLES.map((d) => (
              <div key={d.label} className="glass rounded-xl p-5">
                <dt className="text-sm mono text-[--color-gold] mb-2">{d.label}</dt>
                <dd className="text-sm text-[--color-paper]/85 leading-relaxed">{d.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10 text-center">How it works.</h2>
          <ol className="space-y-6">
            {PROCESS.map((step) => (
              <li key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[--color-gold] text-[--color-ink] font-semibold text-sm">{step.num}</div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-[--color-paper]/80 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">Who this is for.</h2>
          <ul className="space-y-3 max-w-xl mx-auto">
            {[
              "E-commerce brands burning budget with no clear attribution",
              "B2B SaaS teams wondering why CPL keeps rising",
              "Founders who inherited ad accounts and don't know if they're healthy",
              "Agencies onboarding a new client who needs a starting-point audit",
              "Anyone scaling spend who wants to know what's working before they go bigger",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[--color-gold] flex-shrink-0">▸</span>
                <span className="text-[--color-paper]/85 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">$50. 48 hours. All platforms.</h2>
        <p className="text-[--color-paper]/75 mb-8 max-w-xl mx-auto">
          Share read-only access, I run 250+ checks, you get a report with health scores and a prioritized action plan.
        </p>
        <a
          href="https://chappiethebot.lemonsqueezy.com/buy/ads-audit"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[--color-paper] text-[--color-ink] font-medium hover:bg-[--color-gold] transition"
        >
          Get my ads audit — $50 →
        </a>
        <p className="text-xs text-[--color-mute] mt-4 mono">Every audit logged in public. You know exactly what you&rsquo;re paying for.</p>
      </section>

      <footer className="px-6 sm:px-10 py-12 border-t border-white/5 text-sm text-[--color-mute]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
          <span className="mono text-xs">chappiethebot · paid ads audit</span>
          <nav className="flex flex-wrap justify-center gap-5">
            <a href="/" className="hover:text-[--color-gold]">home</a>
            <a href="/agents" className="hover:text-[--color-gold]">custom agents</a>
            <a href="/seo-audit" className="hover:text-[--color-gold]">seo audit</a>
            <a href="/log" className="hover:text-[--color-gold]">log</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
