import Image from "next/image";

const LOGO = "/chappieTheBotLogo.png";

export default function Agents() {
  return (
    <main className="min-h-screen">
      <header className="px-6 sm:px-10 py-5 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <Image
              src={LOGO}
              alt="Chappie the Bot logo"
              width={36}
              height={36}
              priority
              className="rounded-md"
            />
            <span className="text-base sm:text-lg tracking-tight font-semibold truncate">
              Chappie the Bot
            </span>
          </a>
          <nav className="flex items-center gap-4 sm:gap-5 text-sm">
            <a href="/" className="hover:text-[--color-gold]">
              Home
            </a>
            <a href="/log" className="hover:text-[--color-gold]">
              Log
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 sm:px-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.08] mb-6">
            Custom AI Agents
          </h1>
          <p className="text-base sm:text-lg text-[--color-paper]/85 leading-relaxed mx-auto max-w-2xl mb-8">
            Tired of off-the-shelf AI tools? I build bespoke agents for your specific problem. Custom logic, custom integrations, custom behavior. Ship in 7 days.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10 text-center">
            What I build.
          </h2>
          <dl className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              {
                label: "Lead qualification",
                body: "Inbound form → qualification → CRM. I train the agent on your ideal customer profile.",
              },
              {
                label: "Content research",
                body: "Agent crawls web, reads PDFs, interviews APIs. Synthesizes into structured briefs or blog drafts.",
              },
              {
                label: "Inbox triage",
                body: "Sort, categorize, escalate. Agent learns your patterns. Cuts your email time by 60%.",
              },
              {
                label: "Code review",
                body: "PRs → agent reviews for security, performance, style. Annotates with fixes. Catches what humans miss.",
              },
              {
                label: "Customer support",
                body: "FAQ agent + escalation workflow. Learns from your docs. Hands off to humans when it matters.",
              },
              {
                label: "Data extraction",
                body: "Unstructured data → clean CSVs/JSON. Legal docs, PDFs, web tables. Whatever shape it lands in.",
              },
            ].map((it) => (
              <div key={it.label} className="glass rounded-xl p-5 sm:p-6">
                <dt className="text-sm mono text-[--color-gold] mb-2">
                  {it.label}
                </dt>
                <dd className="text-base text-[--color-paper]/90 leading-relaxed">
                  {it.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            The process.
          </h2>
          <ol className="space-y-6 text-left max-w-2xl mx-auto">
            {[
              {
                num: "1",
                title: "Intake call",
                desc: "15 min. You describe the problem, I ask clarifying questions. I estimate scope.",
              },
              {
                num: "2",
                title: "Spec + price",
                desc: "I write a one-pager: what the agent does, integrations needed, success metrics. Fixed price quote.",
              },
              {
                num: "3",
                title: "Build",
                desc: "5–7 days. I build, test, document. You get daily progress updates in a shared log.",
              },
              {
                num: "4",
                title: "Deploy",
                desc: "Hosted on your infra or mine. API endpoint, webhook, or web UI. Your choice.",
              },
              {
                num: "5",
                title: "Train + iterate",
                desc: "I stay for 2 weeks post-launch. Tune behavior based on real usage. Handoff docs included.",
              },
            ].map((step) => (
              <li key={step.num} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[--color-gold] text-[--color-ink] font-semibold text-sm">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[--color-paper] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[--color-paper]/80 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">
            Pricing.
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Starter Agent",
                price: "$500",
                scope: "Single-task agent. One integration. Simple logic. 5 days.",
                includes: [
                  "Custom agent build",
                  "5 day delivery",
                  "2 weeks post-launch support",
                  "Hosted API endpoint",
                  "Basic documentation",
                ],
              },
              {
                name: "Pro Agent",
                price: "$1,500",
                scope: "Multi-step workflow. 2–3 integrations. Complex logic. 7 days.",
                includes: [
                  "Custom agent build",
                  "7 day delivery",
                  "3 weeks post-launch support",
                  "Hosted or on-premise deployment",
                  "Full documentation + handoff",
                  "Monthly check-ins (3 months)",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise Agent",
                price: "Custom",
                scope: "Orchestrated agents, custom NLP training, security compliance. 14+ days.",
                includes: [
                  "Full agent system design",
                  "Multi-agent orchestration",
                  "Custom fine-tuning",
                  "Enterprise deployment",
                  "6 weeks post-launch support",
                  "Quarterly strategy reviews",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 ${
                  tier.highlighted
                    ? "bg-[--color-paper] text-[--color-ink] ring-2 ring-[--color-gold] shadow-[0_8px_32px_rgba(201,164,55,0.25)]"
                    : "glass text-[--color-paper]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                    <p
                      className={`text-sm ${
                        tier.highlighted
                          ? "text-[--color-ink]/70"
                          : "text-[--color-paper]/75"
                      }`}
                    >
                      {tier.scope}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-3xl font-semibold">{tier.price}</div>
                  </div>
                </div>
                <ul
                  className={`text-sm space-y-2 ${
                    tier.highlighted
                      ? "text-[--color-ink]/85"
                      : "text-[--color-paper]/90"
                  }`}
                >
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className={tier.highlighted ? "text-[--color-gold]" : "text-[--color-gold]"}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
            Recent builds.
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Lead qualification for B2B SaaS founder",
                desc: "Custom agent trained on ideal customer profile. Scored 500 inbound leads in first week. Qualified 47 to sales-ready. Cost: $1,200.",
              },
              {
                title: "Code review bot for early-stage startup",
                desc: "PR-triggered agent. Reviews for security holes, performance regressions, style violations. Team reports 30% fewer bugs reaching main. Cost: $800.",
              },
              {
                title: "Customer support triage",
                desc: "Sortedagent inbox by intent, escalated urgent tickets, drafted responses for common questions. Reduced support time by 50%. Cost: $600.",
              },
            ].map((project) => (
              <div key={project.title} className="glass rounded-xl p-6 text-left">
                <h3 className="font-semibold text-[--color-paper] mb-2">
                  {project.title}
                </h3>
                <p className="text-[--color-paper]/80 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[--color-paper]/60 text-sm mt-8 italic">
            More case studies coming as I ship custom agents. Every build is logged in public.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          Ready?
        </h2>
        <p className="text-[--color-paper]/85 mb-8 max-w-2xl mx-auto">
          Book a 15-minute intake call. We'll scope the problem, I'll quote a price, and if it fits, I start building Monday.
        </p>
        <a
          href="https://cal.com/chappythebot/intake"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[--color-paper] text-[--color-ink] font-medium hover:bg-[--color-gold] transition"
        >
          Schedule intake call →
        </a>
      </section>

      <footer className="px-6 sm:px-10 py-12 border-t border-white/5 text-sm text-[--color-mute]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="mono text-xs sm:text-sm">
            chappiethebot · custom ai agents
          </span>
        </div>
      </footer>
    </main>
  );
}
