export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR · CCPA · ePrivacy
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Compliant<br />
          <span className="text-[#58a6ff]">Cookie Consent Code</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Configure your consent banner, pick your jurisdiction, and get production-ready code snippets in seconds. No legal headaches.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $9/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "GDPR Templates",
            "CCPA Support",
            "Custom Categories",
            "Dark & Light Themes",
            "Vanilla JS Output",
            "React Snippet",
          ].map((f) => (
            <div key={f} className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-center text-[#c9d1d9]">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited code generations",
              "GDPR, CCPA & ePrivacy templates",
              "Vanilla JS + React snippets",
              "Custom branding & colors",
              "Jurisdiction-specific copy",
              "Priority email support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which regulations are covered?",
              a: "Templates cover GDPR (EU), CCPA (California), and the ePrivacy Directive. Each jurisdiction has pre-written legal copy and the correct consent logic baked in.",
            },
            {
              q: "What code formats are generated?",
              a: "You get a self-contained Vanilla JS snippet you can drop into any site, plus a React component for modern stacks. Both include full documentation comments.",
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes — cancel anytime from your Lemon Squeezy customer portal. You keep access until the end of your billing period.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Cookie Consent Generator. All rights reserved.
      </footer>
    </main>
  );
}
