import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DealKaro — Kleem Technologies",
  description: "DealKaro is a growth partner for WhatsApp sellers across India. We help jewellers, bakers, distributors and more turn conversations into closed deals.",
};

const P = "#4A148C";
const A = "#FFD700";

const STATS = [
  { value: "2,400+", label: "Active sellers",                    icon: "🏪" },
  { value: "₹12Cr+", label: "Orders processed on platform",      icon: "💰" },
  { value: "48 min", label: "Avg lead response improvement",      icon: "⚡" },
  { value: "94%",    label: "Lead reply rate",                    icon: "💬" },
];

const MISSION_CARDS = [
  { icon: "⚡", title: "Simplifying selling",           body: "Most business tools are built for enterprises with tech teams. We build for the baker who runs her business from a phone and needs zero learning curve.", accent: P },
  { icon: "🤝", title: "AI-powered but human",          body: "AI handles the repetitive — follow-ups, catalogue copy, lead scoring. You handle the relationship. That balance is what makes DealKaro actually work.", accent: "#6366f1" },
  { icon: "💸", title: "Turning conversations into deals", body: "A WhatsApp chat is the most natural sales channel in India. We built an entire selling system around it — not against it.", accent: "#f59e0b" },
];

const VALUES = [
  { icon: "🎯", title: "Sellers first — always",      desc: "Every feature we ship starts with a real seller problem. Not a demo. Not a pitch deck." },
  { icon: "🗣️", title: "Plain language, no jargon",   desc: "If you need to read a manual to use it, we've failed." },
  { icon: "🚀", title: "Ship fast, fix faster",        desc: "We move fast because sellers don't have time to wait 6 months for a fix." },
  { icon: "💯", title: "Results over vanity metrics",  desc: "We don't celebrate app downloads. We celebrate sellers who closed their first deal." },
];

const TEAM = [
  { emoji: "👨‍💻", name: "Ramesh",  role: "Founder & Product",     note: "Built DealKaro after watching his cousin lose ₹40,000 worth of jewellery orders in WhatsApp chats over one month." },
  { emoji: "👩‍🎨", name: "Pooja",   role: "Design & Experience",   note: "Obsessed with making every screen feel like it was designed by someone who actually sells on WhatsApp." },
  { emoji: "🧑‍💼", name: "Arjun",   role: "Growth & Partnerships", note: "Talks to 50+ sellers every week. Your feedback goes directly into the product through him." },
  { emoji: "👨‍🔬", name: "Kunal",   role: "AI & Engineering",      note: "The person responsible for making the AI write convincing Hinglish. Yes, that's a real job." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#F9FBFA" }}>

      {/* Hero */}
      <section className="py-24 px-4" style={{ background: "#111827" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.2)", color: "#CE93D8" }}>
            About DealKaro
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Helping real sellers grow.
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: A }}>
            Not a software company.
          </p>
          <p className="text-xl sm:text-2xl font-semibold" style={{ color: "#9ca3af" }}>
            A growth partner for WhatsApp businesses.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14 px-4" style={{ background: P }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{s.icon}</span>
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">{s.value}</p>
              <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}>
              Our story
            </span>
            <h2 className="text-3xl font-extrabold mb-6 leading-tight" style={{ color: "#111827" }}>
              One system. One flow.<br />
              <span style={{ color: P }}>From chat to deal.</span>
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "#4b5563" }}>
              <p>Every day, millions of small business owners across India wake up and open WhatsApp. That&apos;s where their customers are. That&apos;s where their orders come in. That&apos;s where their business lives.</p>
              <p>And that&apos;s also where their leads disappear.</p>
              <p>A customer asks about a gold ring at 2 PM. You reply at 4 PM. They&apos;ve already bought from someone else. Another customer asks for a catalogue. You send 20 photos. They scroll once and go silent.</p>
              <p><strong style={{ color: "#111827" }}>DealKaro was built to fix exactly this.</strong> Not with a complicated CRM. But with a structured selling system that lives right where your business already operates — WhatsApp.</p>
              <p>One flow. Capture the lead. Share the catalogue. Track the interest. Follow up at the right time. Collect payment. Done.</p>
            </div>
          </div>
          <div className="rounded-3xl p-8" style={{ background: "#111827" }}>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "#9ca3af" }}>How DealKaro started</p>
            {[
              { year: "2022",   event: "Founder helps a cousin run her jewellery business. Spreadsheets, WhatsApp screenshots, lost orders everywhere." },
              { year: "2023 Q1", event: "First version built for 5 sellers in Pune. \"No app, no website — just fix my WhatsApp selling.\"" },
              { year: "2023 Q3", event: "500 sellers. Word spreads through baker groups, jewellery associations, and electronics dealers." },
              { year: "2024",   event: "2,400+ sellers. ₹12Cr+ orders tracked. Hinglish AI, multi-seller networks, commission tracking all shipped." },
              { year: "2025 →", event: "AI Lead Qualification in development. Goal: every seller gets an AI that closes deals on their behalf.", future: true },
            ].map((item) => (
              <div key={item.year} className="flex gap-4 mb-5 last:mb-0">
                <div className="shrink-0">
                  <span className="text-[10px] font-black px-2 py-1 rounded-lg"
                    style={{ background: item.future ? "rgba(74,20,140,0.2)" : "rgba(255,255,255,0.07)", color: item.future ? "#CE93D8" : "#9ca3af" }}>
                    {item.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: item.future ? "#E1BEE7" : "#d1d5db" }}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission cards */}
      <section className="py-20 px-4" style={{ background: "#F9FBFA" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#111827" }}>What we stand for</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {MISSION_CARDS.map((card) => (
              <div key={card.title} className="rounded-3xl p-8 flex flex-col gap-4 bg-white"
                style={{ border: `2px solid ${card.accent}20` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${card.accent}15` }}>{card.icon}</div>
                <h3 className="font-extrabold text-lg" style={{ color: "#111827" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{card.body}</p>
                <div className="h-1 rounded-full mt-auto" style={{ background: `${card.accent}30` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#111827" }}>How we work</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-5 items-start p-6 rounded-2xl" style={{ border: "1px solid #f3f4f6", background: "#F9FBFA" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "rgba(74,20,140,0.1)" }}>{v.icon}</div>
                <div>
                  <h3 className="font-extrabold text-sm mb-1.5" style={{ color: "#111827" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4" style={{ background: "#F9FBFA" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold" style={{ color: "#111827" }}>The people building this</h2>
            <p className="mt-3 text-base" style={{ color: "#6b7280" }}>A small team, a very clear mission.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-2xl p-6 text-center bg-white"
                style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(17,24,39,0.05)" }}>
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{ background: "rgba(74,20,140,0.1)" }}>{member.emoji}</div>
                <h3 className="font-extrabold text-base mb-0.5" style={{ color: "#111827" }}>{member.name}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: P }}>{member.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{member.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: "#9ca3af" }}>
            + Designers, support specialists, and AI trainers across India.
          </p>
        </div>
      </section>

      {/* Parent brand */}
      <section className="py-12 px-4" style={{ background: "#ffffff", borderTop: "1px solid #f3f4f6" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm mb-2" style={{ color: "#9ca3af" }}>DealKaro is a product of</p>
          <p className="text-xl font-extrabold" style={{ color: "#111827" }}>Kleem Technologies Pvt. Ltd.</p>
          <p className="text-sm mt-2" style={{ color: "#6b7280" }}>Building AI-powered commerce tools for India&apos;s real economy.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-4" style={{ background: "#111827" }}>
        <h2 className="text-3xl font-extrabold text-white mb-4">Join us. Sell smarter.</h2>
        <p className="text-base mb-8" style={{ color: "#9ca3af" }}>We&apos;re just getting started. Your business deserves the same tools as big companies.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90"
            style={{ background: A, color: "#111827", boxShadow: `0 6px 24px rgba(74,20,140,0.3)` }}>
            Start Free Trial
          </a>
          <a href="/contact" className="px-8 py-4 rounded-2xl font-bold border-2 transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}>
            Talk to the Team
          </a>
        </div>
      </section>

    </div>
  );
}
