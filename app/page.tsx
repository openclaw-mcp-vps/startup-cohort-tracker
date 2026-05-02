export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          For Accelerator Founders
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track your startup cohort&apos;s{" "}
          <span className="text-[#58a6ff]">progress automatically</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Automatically scrapes and aggregates public data about your cohort companies — funding rounds, team growth, and product launches — all in one clean dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "💰", title: "Funding Alerts", desc: "Get notified the moment a cohort company closes a round." },
            { icon: "👥", title: "Hiring Signals", desc: "Track team size changes across LinkedIn and job boards." },
            { icon: "🚀", title: "Launch Radar", desc: "Catch product launches from ProductHunt and press mentions." }
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 50 cohort companies",
              "Daily automated data refresh",
              "Funding, hiring & launch tracking",
              "Peer comparison dashboard",
              "Email digest & Slack alerts",
              "CSV export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Where does the data come from?",
              a: "We aggregate publicly available data from Crunchbase, AngelList, LinkedIn, ProductHunt, and company websites using automated scrapers that run daily."
            },
            {
              q: "How do I add companies to my cohort?",
              a: "After signing up, paste a list of company names or URLs. Our system automatically finds and links their public profiles within minutes."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing dashboard with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="p-6 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
