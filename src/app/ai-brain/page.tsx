import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Brain — DealKaro's 24/7 AI Sales Engine",
  description: "Smart replies, lead scoring, Hinglish support, catalogue copywriting, product standardisation, and AI-assisted onboarding. Your AI business assistant.",
};

/* ── Shared shell ─────────────────────────────────────────────── */
function MockShell({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-lg"
      style={{ border: "1.5px solid rgba(74,20,140,0.2)" }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#111827" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A148C" }} />
        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>{title}</span>
        {badge && (
          <span className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(74,20,140,0.15)", color: "#CE93D8" }}>{badge}</span>
        )}
      </div>
      <div className="bg-white p-5">{children}</div>
    </div>
  );
}

const FEATURES = [
  /* 1 — Smart Reply Engine */
  {
    id: "smart-reply",
    icon: "💬",
    title: "Smart Reply Engine",
    accent: "#4A148C",
    desc: "Your AI reads incoming WhatsApp messages, understands intent, and fires back with the perfect reply — product info, pricing, availability — in seconds. You only step in for final negotiation.",
    mock: (
      <MockShell title="Smart Reply Engine" badge="Live">
        <div className="space-y-3">
          <div className="flex gap-2 items-end justify-end">
            <div className="max-w-[75%] rounded-2xl rounded-br-sm px-4 py-2.5 text-xs" style={{ background: "#dcfce7", color: "#14532d" }}>
              Do you have gold earrings in 22kt?
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: "#e5e7eb" }}>👤</div>
          </div>
          <div className="flex gap-2 items-end">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: "rgba(74,20,140,0.15)" }}>🤖</div>
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-4 py-2.5 text-xs" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
              <span style={{ color: "#4A148C" }}>✨ AI replied in 3 sec</span><br />
              <span style={{ color: "#374151" }}>Yes! We have 3 stunning 22kt gold earring sets — starting from ₹3,200. Want me to send you the catalogue link? 💛</span>
            </div>
          </div>
          <div className="flex gap-2 items-end justify-end">
            <div className="max-w-[75%] rounded-2xl rounded-br-sm px-4 py-2.5 text-xs" style={{ background: "#dcfce7", color: "#14532d" }}>
              Yes please! Also what are your delivery charges?
            </div>
          </div>
          <div className="flex gap-2 items-end">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: "rgba(74,20,140,0.15)" }}>🤖</div>
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-4 py-2.5 text-xs" style={{ background: "#f9fafb", border: "1px solid #e5e7eb", color: "#374151" }}>
              Here&apos;s your catalogue link 👇<br />
              <span style={{ color: "#4A148C" }}>dealkaro.in/priya-jewels</span><br />
              Free delivery above ₹5,000 🎁
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] p-2.5 rounded-xl" style={{ background: "#F3E5F5" }}>
          <span style={{ color: "#4A148C" }}>⚡</span>
          <span style={{ color: "#7B1FA2" }}>AI handled this — <strong>no manual reply needed</strong></span>
        </div>
      </MockShell>
    ),
  },

  /* 2 — Lead Scoring */
  {
    id: "lead-scoring",
    icon: "🔥",
    title: "Lead Scoring & Hot Lead Signals",
    accent: "#ef4444",
    desc: "DealKaro tracks every customer action — link opens, product views, wishlist adds — and calculates an intent score. When a customer hits 🔥 Hot threshold, you get an instant alert so you can close while the iron is hot.",
    mock: (
      <MockShell title="Intent Tracker" badge="Hot Lead Alert">
        <div className="flex items-center gap-3 p-3 rounded-2xl mb-4"
          style={{ background: "#fef2f2", border: "2px solid #ef4444" }}>
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-xs font-extrabold" style={{ color: "#dc2626" }}>HOT LEAD — Act now!</p>
            <p className="text-xs font-semibold" style={{ color: "#111827" }}>Priya Sharma</p>
          </div>
          <span className="ml-auto text-lg font-black" style={{ color: "#ef4444" }}>94%</span>
        </div>
        <p className="text-[10px] font-bold mb-2" style={{ color: "#9ca3af" }}>ACTIVITY TIMELINE</p>
        {[
          { icon: "👁", text: "Opened catalogue link",      time: "2:10 PM", hot: false },
          { icon: "🔁", text: "Viewed Gold Jhumka 4×",      time: "2:14 PM", hot: false },
          { icon: "❤️", text: "Added to wishlist",          time: "2:18 PM", hot: false },
          { icon: "🔥", text: "Hot lead threshold reached", time: "2:20 PM", hot: true  },
          { icon: "🔔", text: "You were notified",          time: "2:20 PM", hot: true  },
        ].map(e => (
          <div key={e.text} className="flex items-center gap-2 py-1.5">
            <span className="text-xs shrink-0">{e.icon}</span>
            <p className="text-[10px] flex-1" style={{ color: e.hot ? "#dc2626" : "#374151", fontWeight: e.hot ? 700 : 400 }}>{e.text}</p>
            <p className="text-[9px] shrink-0" style={{ color: "#9ca3af" }}>{e.time}</p>
          </div>
        ))}
        <button className="mt-4 w-full py-2 rounded-xl text-xs font-bold text-white" style={{ background: "#ef4444" }}>
          💳 Send payment link now
        </button>
      </MockShell>
    ),
  },

  /* 3 — Catalogue Copywriter */
  {
    id: "catalogue-copywriter",
    icon: "✍️",
    title: "Catalogue Copywriter",
    accent: "#6366f1",
    desc: "Upload a product photo and a few keywords. DealKaro AI writes a complete product title, selling description, and suggested price — ready to publish to your catalogue in one click.",
    mock: (
      <MockShell title="AI Catalogue Copywriter">
        <div className="p-3 rounded-xl mb-3" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
          <p className="text-[10px] font-bold mb-1" style={{ color: "#9ca3af" }}>📥 YOU UPLOADED</p>
          <p className="text-xs font-semibold" style={{ color: "#374151" }}>Gold ring, 22kt, Rajasthani design, handmade</p>
        </div>
        <div className="flex items-center gap-2 my-3 justify-center">
          <div className="h-px flex-1" style={{ background: "#e5e7eb" }} />
          <span className="text-[10px] font-bold px-2" style={{ color: "#6366f1" }}>✨ AI GENERATED</span>
          <div className="h-px flex-1" style={{ background: "#e5e7eb" }} />
        </div>
        <div className="p-4 rounded-xl" style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)" }}>
          <p className="text-xs font-extrabold mb-1" style={{ color: "#111827" }}>Radiant Rajasthani Gold Ring — 22kt</p>
          <p className="text-xs leading-relaxed mb-2" style={{ color: "#6b7280" }}>
            Handcrafted in pure 22kt gold, this stunning ring blends Rajasthan&apos;s rich jewellery heritage with modern elegance. Perfect for weddings, gifting, and festive wear. Limited pieces available.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold" style={{ color: "#111827" }}>₹5,499</span>
            <span className="text-[9px] font-bold px-2 py-1 rounded-full" style={{ background: "#fef3c7", color: "#92400e" }}>AI suggested price</span>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 py-2 rounded-xl text-xs font-bold text-white" style={{ background: "#6366f1" }}>✓ Add to Catalogue</button>
          <button className="px-3 py-2 rounded-xl text-xs font-bold" style={{ border: "1px solid #e5e7eb", color: "#374151" }}>✏️ Edit</button>
        </div>
      </MockShell>
    ),
  },

  /* 4 — Hinglish */
  {
    id: "hinglish",
    icon: "🗣️",
    title: "Hinglish & Regional Language Support",
    accent: "#f59e0b",
    desc: "Your customers think in Hindi, speak in Marathi, and type in Hinglish. DealKaro AI writes product descriptions and replies in whichever language your customer prefers — automatically.",
    mock: (
      <MockShell title="Language AI" badge="4 languages">
        <p className="text-[10px] font-bold mb-3" style={{ color: "#9ca3af" }}>SAME PRODUCT · 4 VOICES</p>
        {[
          { flag: "🇬🇧", lang: "English",  text: "Handcrafted 22kt gold ring. Perfect for weddings & gifting. Limited stock.", color: "#374151" },
          { flag: "🤌",   lang: "Hinglish", text: "Ye ring 22kt sone se haath se bani hai — bilkul perfect gift ya wedding ke liye! 💛", color: "#374151" },
          { flag: "🇮🇳",  lang: "Hindi",   text: "यह अंगूठी 22 कैरेट सोने से बनी है। शादी और उपहार के लिए बेहतरीन।", color: "#374151" },
          { flag: "🫶",   lang: "Marathi", text: "हि अंगठी 22kt सोन्याची आहे — लग्न आणि भेटीसाठी उत्तम!", color: "#374151" },
        ].map(l => (
          <div key={l.lang} className="mb-3 p-3 rounded-xl" style={{ border: "1px solid #f3f4f6", background: "#f9fafb" }}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-sm">{l.flag}</span>
              <span className="text-[10px] font-bold" style={{ color: "#f59e0b" }}>{l.lang}</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: l.color }}>{l.text}</p>
          </div>
        ))}
      </MockShell>
    ),
  },

  /* 5 — Product Standardisation */
  {
    id: "product-standardisation",
    icon: "🗂️",
    title: "Product Standardisation",
    accent: "#14b8a6",
    desc: "Sellers upload products in every format imaginable — blurry photos, inconsistent names, missing prices. DealKaro AI normalises all product data: standard naming, correct categorisation, formatted prices, and quality descriptions — before it ever reaches the catalogue.",
    mock: (
      <MockShell title="Product Standardiser">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] font-bold mb-2" style={{ color: "#ef4444" }}>❌ Raw Input</p>
            {[
              { label: "Name",  val: "gold ring 22kt raj" },
              { label: "Price", val: "5k" },
              { label: "Desc",  val: "nice ring handmade" },
              { label: "Cat",   val: "misc" },
            ].map(r => (
              <div key={r.label} className="mb-1.5 px-2 py-1.5 rounded-lg text-[10px]" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                <span style={{ color: "#9ca3af" }}>{r.label}: </span>
                <span style={{ color: "#dc2626" }}>{r.val}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-bold mb-2" style={{ color: "#14b8a6" }}>✅ Standardised</p>
            {[
              { label: "Name",  val: "Rajasthani Gold Ring 22kt" },
              { label: "Price", val: "₹5,000" },
              { label: "Desc",  val: "Handcrafted 22kt gold…" },
              { label: "Cat",   val: "Rings › Gold" },
            ].map(r => (
              <div key={r.label} className="mb-1.5 px-2 py-1.5 rounded-lg text-[10px]" style={{ background: "#f0fdfa", border: "1px solid #99f6e4" }}>
                <span style={{ color: "#9ca3af" }}>{r.label}: </span>
                <span style={{ color: "#0f766e" }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 text-center text-[10px] font-bold p-2 rounded-xl" style={{ background: "#f0fdfa", color: "#0f766e" }}>
          ✓ Catalogue quality score: 98%
        </div>
      </MockShell>
    ),
  },

  /* 6 — AI Onboarding */
  {
    id: "ai-onboarding",
    icon: "🚀",
    title: "AI-Assisted Onboarding",
    accent: "#8b5cf6",
    desc: "New to DealKaro? The AI walks you through every setup step — WhatsApp connection, product upload, reply rules, first catalogue — with smart guidance. Most sellers are live in under 10 minutes without any help from our team.",
    mock: (
      <MockShell title="AI Setup Guide">
        <p className="text-[10px] font-bold mb-3" style={{ color: "#9ca3af" }}>YOUR ONBOARDING PROGRESS</p>
        {[
          { step: "01", label: "Connect WhatsApp Business", done: true  },
          { step: "02", label: "Upload first 5 products",   done: true  },
          { step: "03", label: "Set AI reply rules",         done: true  },
          { step: "04", label: "Configure follow-up timing", done: false, active: true },
          { step: "05", label: "Go live & share store link", done: false },
        ].map(s => (
          <div key={s.step} className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
              style={{
                background: s.done ? "#4A148C" : s.active ? "#8b5cf6" : "#f3f4f6",
                color: s.done || s.active ? "#fff" : "#9ca3af",
              }}>
              {s.done ? "✓" : s.step}
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold" style={{ color: s.done ? "#111827" : s.active ? "#8b5cf6" : "#9ca3af" }}>
                {s.label}
              </p>
              {s.active && <p className="text-[9px]" style={{ color: "#8b5cf6" }}>← In progress</p>}
            </div>
          </div>
        ))}
        <div className="mt-2 h-2 rounded-full overflow-hidden" style={{ background: "#f3f4f6" }}>
          <div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#4A148C,#8b5cf6)", width: "60%" }} />
        </div>
        <p className="text-[10px] text-center mt-1" style={{ color: "#9ca3af" }}>60% complete · Est. 4 min remaining</p>
      </MockShell>
    ),
  },
];

export default function AiBrainPage() {
  return (
    <div style={{ background: "#F9FBFA" }}>

      {/* Hero */}
      <section className="py-20 text-center" style={{ background: "#111827" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.2)", color: "#CE93D8" }}>
            AI Brain
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Your AI Business Assistant.{" "}
            <span style={{ color: "#FFD700" }}>Works 24/7.</span>
          </h1>
          <p className="text-lg" style={{ color: "#9ca3af" }}>
            Six AI engines — one goal: close more deals while you sleep.
          </p>
        </div>
      </section>

      {/* Feature deep-dives */}
      {FEATURES.map((feat, idx) => (
        <section
          key={feat.id}
          id={feat.id}
          className="py-20 px-4"
          style={{ background: idx % 2 === 0 ? "#ffffff" : "#F9FBFA" }}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

            {/* Copy — alternate sides */}
            <div className={idx % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: `${feat.accent}15`, border: `2px solid ${feat.accent}30` }}>
                {feat.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: "#111827" }}>
                {feat.title}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>{feat.desc}</p>
              <a href="/contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: feat.accent }}>
                Try it free →
              </a>
            </div>

            {/* Mock UI */}
            <div className={idx % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
              {feat.mock}
            </div>

          </div>
        </section>
      ))}

      {/* Coming Soon — Future AI Lead Assistance */}
      <section id="future-ai" className="py-20 px-4" style={{ background: "#111827" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(253,224,71,0.15)", color: "#fde047" }}>
            🚧 Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Future AI Lead Assistance
          </h2>
          <p className="text-lg mb-12" style={{ color: "#9ca3af" }}>
            The next evolution of DealKaro AI — your assistant that qualifies leads, pitches products, and closes deals autonomously.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "🤖", title: "AI Lead Qualifier",      desc: "AI chats with new leads, asks the right questions, and pre-qualifies intent before handing off to you." },
              { icon: "🎯", title: "Autonomous Pitch Engine", desc: "AI identifies the best product match per customer and sends a tailored pitch without any input from you." },
              { icon: "📈", title: "Predictive Close Score",  desc: "AI predicts the probability of closing each deal and surfaces the ones you should prioritise right now." },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl text-left"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(253,224,71,0.15)" }}>
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-extrabold text-sm mb-2 text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm border-2 transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(253,224,71,0.4)", color: "#fde047" }}>
            🔔 Get early access
          </a>
        </div>
      </section>

    </div>
  );
}
