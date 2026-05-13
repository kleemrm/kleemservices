import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pricing — DealKaro powered by Kleem",
  description:
    "Transparent pricing for WhatsApp sellers. WhatsApp Closer ₹999/mo · Intent Engine ₹1999/mo · Distribution King ₹2999/mo. 14-day free trial, no credit card needed.",
};

const P = "#4A148C";
const A = "#FFD700";

const PLANS = [
  {
    id: "whatsapp-closer",
    name: "WhatsApp Closer",
    setup: "₹999",
    price: "₹999",
    tagline: "For solo sellers getting started",
    promise: "Never lose a chat. Never miss a deal.",
    dark: false,
    accent: false,
    cta: "Start with Closer",
    features: [
      "WhatsApp + manual lead capture",
      "Money List (prospects dashboard)",
      "Curated catalogue sharing",
      "Cart & wishlist tracking",
      "Basic order management",
      "Basic invoicing",
      "Payment link generation",
      "Simple store page",
    ],
  },
  {
    id: "intent-engine",
    name: "Intent Engine",
    setup: "₹1,999",
    price: "₹1,999",
    tagline: "For sellers ready to scale",
    promise: "Know who's hot. Close faster.",
    dark: false,
    accent: true,
    popular: true,
    cta: "Get Intent Engine",
    features: [
      "Everything in WhatsApp Closer +",
      "Hot Lead Signals 🔥",
      "Follow-up reminders",
      "Activity & intent tracking",
      "Quick reply templates",
      "AI catalogue copywriter",
      "P&L overview",
      "Sales performance dashboard",
      "Simple accounting",
    ],
  },
  {
    id: "distribution-king",
    name: "Distribution King",
    setup: "₹2,999",
    price: "₹2,999",
    tagline: "For networks & franchise owners",
    promise: "Own the network. Own the revenue.",
    dark: true,
    accent: false,
    cta: "Talk to Sales",
    features: [
      "Everything in Intent Engine +",
      "Multi-seller system",
      "Referral links & commission tracking",
      "Central product repository",
      "Hinglish & regional language AI",
      "AI Brand Brain",
      "AI-assisted onboarding",
      "Advanced inventory management",
      "UGC & buyer feedback capture",
    ],
  },
];

const ROWS: { feature: string; wc: boolean | string; ie: boolean | string; dk: boolean | string }[] = [
  { feature: "Lead capture (WhatsApp + manual)", wc: true,  ie: true,  dk: true  },
  { feature: "Catalogue sharing",                wc: true,  ie: true,  dk: true  },
  { feature: "Payment link generation",          wc: true,  ie: true,  dk: true  },
  { feature: "Basic order management",           wc: true,  ie: true,  dk: true  },
  { feature: "Simple store page",                wc: true,  ie: true,  dk: true  },
  { feature: "Hot Lead Signals 🔥",              wc: false, ie: true,  dk: true  },
  { feature: "Follow-up reminders",              wc: false, ie: true,  dk: true  },
  { feature: "AI catalogue copywriter",          wc: false, ie: true,  dk: true  },
  { feature: "Sales dashboard",                  wc: false, ie: true,  dk: true  },
  { feature: "P&L overview",                     wc: false, ie: true,  dk: true  },
  { feature: "Multi-seller hub",                 wc: false, ie: false, dk: true  },
  { feature: "Commission & referral tracking",   wc: false, ie: false, dk: true  },
  { feature: "AI Brand Brain",                   wc: false, ie: false, dk: true  },
  { feature: "Hinglish / regional language AI",  wc: false, ie: false, dk: true  },
  { feature: "Advanced inventory",               wc: false, ie: false, dk: true  },
  { feature: "Setup fee (one-time)",             wc: "₹999", ie: "₹1,999", dk: "₹2,999" },
  { feature: "Monthly fee",                      wc: "₹999", ie: "₹1,999", dk: "₹2,999" },
];

const FAQS = [
  { q: "Do I need a website to use DealKaro?",             a: "No website needed. DealKaro works entirely through WhatsApp and a simple store link we generate for you. Your customers don't need to download anything — they just click your link and shop." },
  { q: "How does the setup work?",                         a: "Once you sign up, our team walks you through connecting your WhatsApp Business account, uploading your products, and configuring AI rules. Most sellers are live in under 10 minutes. If you need help, we do the full setup for you." },
  { q: "What is the setup fee and is it charged again?",   a: "The setup fee is a one-time charge when you join. It covers WhatsApp API configuration, catalogue import, and your personalised store page. It is never charged again — only your monthly subscription renews." },
  { q: "Can I cancel my subscription anytime?",            a: "Yes, absolutely. You can cancel anytime from your dashboard. Your data stays accessible for 30 days after cancellation for you to export. We don't charge cancellation fees." },
  { q: "Is there a free trial?",                           a: "Every plan includes a 14-day free trial. No credit card is required to start. You only pay after you've seen DealKaro work for your business." },
  { q: "Can I switch plans later?",                        a: "Yes. You can upgrade or downgrade at any time. Upgrades activate immediately; downgrades apply at your next billing cycle. All your data carries over seamlessly." },
];

function Tick() {
  return <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-[11px] font-bold text-white" style={{ background: P }}>✓</span>;
}
function Cross() {
  return <span className="inline-block w-6 h-6 rounded-full" style={{ background: "#f3f4f6" }} />;
}
function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <Tick />;
  if (val === false) return <Cross />;
  return <span className="text-xs font-bold" style={{ color: "#111827" }}>{val}</span>;
}

export default function PricingPage() {
  return (
    <div style={{ background: "#F9FBFA" }}>

      {/* Hero */}
      <section className="py-20 text-center" style={{ background: "#111827" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.2)", color: "#CE93D8" }}>
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Simple pricing for <span style={{ color: A }}>serious sellers.</span>
          </h1>
          <p className="text-lg" style={{ color: "#9ca3af" }}>No hidden fees. No enterprise nonsense. Start free for 14 days.</p>
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {["✓ 14-day free trial", "✓ No credit card needed", "✓ Cancel anytime"].map((t) => (
              <span key={t} className="text-sm font-semibold" style={{ color: "#CE93D8" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div key={plan.id} id={plan.id} className="relative flex flex-col rounded-3xl p-8"
              style={{
                background: plan.accent ? `linear-gradient(145deg,${P},#6A1E9E)` : plan.dark ? "#111827" : "#ffffff",
                border: plan.accent ? "none" : plan.dark ? "1px solid rgba(74,20,140,0.2)" : "1px solid #e5e7eb",
                boxShadow: plan.accent ? "0 12px 40px rgba(74,20,140,0.35)" : "0 4px 20px rgba(17,24,39,0.07)",
              }}>
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md"
                  style={{ background: A, color: "#111827" }}>
                  ⭐ Most Popular
                </span>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-extrabold mb-1" style={{ color: plan.accent || plan.dark ? "#ffffff" : "#111827" }}>{plan.name}</h2>
                <p className="text-sm" style={{ color: plan.accent ? "rgba(255,255,255,0.7)" : plan.dark ? "#9ca3af" : "#6b7280" }}>{plan.tagline}</p>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black" style={{ color: plan.accent ? "#ffffff" : plan.dark ? A : "#111827" }}>{plan.price}</span>
                <span className="text-sm pb-1" style={{ color: plan.accent ? "rgba(255,255,255,0.6)" : "#9ca3af" }}>/month</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold mb-6 self-start"
                style={{ background: plan.accent ? "rgba(0,0,0,0.2)" : plan.dark ? "rgba(74,20,140,0.2)" : "rgba(74,20,140,0.08)", color: plan.accent ? "#ffffff" : P }}>
                ⚡ {plan.setup} one-time setup
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: plan.accent || plan.dark ? "#e5e7eb" : "#374151" }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5"
                      style={{ background: plan.accent ? "rgba(255,255,255,0.2)" : plan.dark ? "rgba(74,20,140,0.25)" : "rgba(74,20,140,0.1)", color: plan.accent ? "#ffffff" : P }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact"
                className="block text-center py-3.5 rounded-2xl font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ background: plan.accent ? A : plan.dark ? A : "#111827", color: plan.accent ? "#111827" : plan.dark ? "#111827" : "#ffffff" }}>
                {plan.cta}
              </a>
              <p className="mt-3 text-center text-xs font-semibold italic"
                style={{ color: plan.accent ? "rgba(255,255,255,0.7)" : plan.dark ? A : "#9ca3af" }}>
                &ldquo;{plan.promise}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: "#111827" }}>Full feature comparison</h2>
          <div className="rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#111827" }}>
                  <th className="text-left px-6 py-4 font-semibold" style={{ color: "#9ca3af" }}>Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.id} className="px-4 py-4 text-center font-bold"
                      style={{ color: p.accent ? A : "#ffffff" }}>
                      {p.name}
                      {p.popular && <span className="ml-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: A, color: "#111827" }}>Popular</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "#ffffff" : "#f9fafb" }}>
                    <td className="px-6 py-3.5 font-medium text-sm" style={{ color: "#374151" }}>{row.feature}</td>
                    {[row.wc, row.ie, row.dk].map((val, j) => (
                      <td key={j} className="px-4 py-3.5 text-center"><Cell val={val} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10" style={{ color: "#111827" }}>Frequently asked questions</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
            <FaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "🔄", title: "30-day money-back",  sub: "Not happy? Full refund."    },
              { icon: "⚡", title: "No-code setup",        sub: "Live in under 10 minutes." },
              { icon: "🔒", title: "GDPR compliant",       sub: "Your data is always yours." },
              { icon: "🎁", title: "14-day free trial",    sub: "No credit card required."  },
            ].map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center p-5 rounded-2xl" style={{ border: "1px solid #f3f4f6", background: "#F9FBFA" }}>
                <span className="text-3xl mb-3">{b.icon}</span>
                <p className="font-bold text-sm mb-1" style={{ color: "#111827" }}>{b.title}</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-4" style={{ background: "#111827" }}>
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to close deals smarter?</h2>
        <p className="text-base mb-8" style={{ color: "#9ca3af" }}>Join 2,400+ WhatsApp sellers already on DealKaro.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90"
            style={{ background: A, color: "#111827", boxShadow: "0 6px 24px rgba(74,20,140,0.3)" }}>
            Start Free Trial →
          </a>
          <a href="/contact" className="px-8 py-4 rounded-2xl font-bold border-2 transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}>
            Book a Demo
          </a>
        </div>
      </section>

    </div>
  );
}
