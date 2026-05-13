import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — DealKaro for Jewellers, Bakers, Laptops & More",
  description: "See how real WhatsApp sellers use DealKaro to close more deals — jewellery shops, bakers, laptop dealers, flower stores, and distributors.",
};

/* ── Shared shell ─────────────────────────────────────────────── */
function MockShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-sm mx-auto"
      style={{ border: "1px solid #e5e7eb" }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#111827" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A148C" }} />
        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>{title}</span>
      </div>
      <div className="bg-white p-4">{children}</div>
    </div>
  );
}

/* ── 4-step flow strip ────────────────────────────────────────── */
function FlowStrip({ steps, accent }: { steps: { icon: string; label: string }[]; accent: string }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="flex flex-col items-center text-center w-28">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-2 shadow-sm"
              style={{ background: `${accent}15`, border: `2px solid ${accent}30` }}>
              {s.icon}
            </div>
            <p className="text-[10px] font-bold leading-tight" style={{ color: "#374151" }}>{s.label}</p>
          </div>
          {i < steps.length - 1 && (
            <svg className="w-6 h-6 shrink-0 mb-4 mx-1" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

const USE_CASES = [
  /* ─── 1. Jewellery ─────────────────────────────────────────── */
  {
    emoji: "💍", category: "Jewellery Sellers", accent: "#f59e0b",
    story: "Meena runs a gold jewellery business from home in Pune. Every day, 40+ enquiries land in her WhatsApp — but most ghost her after she sends price lists. She was losing 3–4 serious buyers a day simply because she couldn't keep track. With DealKaro, she now has a live Money List showing exactly who viewed what, when. Her follow-up game went from 'hope they reply' to 'AI reminds them at the right moment.'",
    steps: [
      { icon: "💬", label: "Customer enquires on WhatsApp" },
      { icon: "📦", label: "AI shares personalised catalogue" },
      { icon: "🔥", label: "Hot lead signal triggers" },
      { icon: "💳", label: "Payment link sent & confirmed" },
    ],
    mock: (
      <MockShell title="Money List — Jewellery">
        {[
          { name: "Priya Sharma",  item: "Gold Jhumka 22kt",  status: "Hot",       hot: true,  color: "#ef4444", time: "2 min ago" },
          { name: "Ritu Agarwal", item: "Kanjivaram Saree",  status: "Follow up", hot: false, color: "#f59e0b", time: "1 hr ago"  },
          { name: "Seema Joshi",  item: "Pearl Necklace",    status: "New",       hot: false, color: "#6366f1", time: "3 hr ago"  },
        ].map(l => (
          <div key={l.name} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{ background: l.hot ? "#ef4444" : "#4A148C" }}>{l.name[0]}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="text-xs font-bold truncate" style={{ color: "#111827" }}>{l.name}</p>
                {l.hot && <span className="text-xs">🔥</span>}
              </div>
              <p className="text-[10px] truncate" style={{ color: "#6b7280" }}>{l.item}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: l.color }}>{l.status}</span>
              <p className="text-[9px] mt-0.5" style={{ color: "#9ca3af" }}>{l.time}</p>
            </div>
          </div>
        ))}
        <button className="mt-3 w-full py-2 rounded-xl text-xs font-bold" style={{ background: "#FFD700", color: "#111827" }}>💳 Send Payment Link</button>
      </MockShell>
    ),
  },
  /* ─── 2. Bakers ────────────────────────────────────────────── */
  {
    emoji: "🎂", category: "Bakers & Home Chefs", accent: "#ec4899",
    story: "Sunita bakes custom cakes in Mumbai. Her problem wasn't demand — it was chaos. Orders came in WhatsApp, Instagram DMs, and phone calls simultaneously. She'd forget advance payments, miss slot confirmations, and accidentally double-book delivery dates. DealKaro gave her a pre-order system inside WhatsApp — customers pick slots, pay 50% advance, and get automated reminders. She now handles 80+ orders per weekend with a team of two.",
    steps: [
      { icon: "📋", label: "Daily menu broadcast at 8 AM" },
      { icon: "🛒", label: "Customer pre-orders with slot" },
      { icon: "💳", label: "50% advance collected via UPI" },
      { icon: "🔔", label: "Delivery reminder auto-sent" },
    ],
    mock: (
      <MockShell title="Pre-Order Dashboard — Bakery">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold" style={{ color: "#111827" }}>This Weekend</p>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#fdf2f8", color: "#ec4899" }}>14 orders</span>
        </div>
        {[
          { name: "Anjali K.",    item: "Red Velvet 1kg",   slot: "Sat 11 AM", paid: true,  amt: "₹850"  },
          { name: "Rahul M.",     item: "Chocolate Truffle", slot: "Sat 2 PM",  paid: false, amt: "₹1,200" },
          { name: "Deepa S.",     item: "Butterscotch 2kg", slot: "Sun 10 AM", paid: true,  amt: "₹1,500" },
        ].map(o => (
          <div key={o.name} className="flex items-center gap-2.5 py-2.5 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold" style={{ color: "#111827" }}>{o.name}</p>
              <p className="text-[10px] truncate" style={{ color: "#6b7280" }}>{o.item}</p>
              <p className="text-[9px]" style={{ color: "#9ca3af" }}>🕐 {o.slot}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-extrabold" style={{ color: "#111827" }}>{o.amt}</p>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: o.paid ? "#f0fdf4" : "#fef3c7", color: o.paid ? "#16a34a" : "#92400e" }}>
                {o.paid ? "Advance ✓" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </MockShell>
    ),
  },
  /* ─── 3. Laptop Sellers ─────────────────────────────────────── */
  {
    emoji: "💻", category: "Laptop & Electronics Dealers", accent: "#6366f1",
    story: "Arjun runs TechZone in Nagpur — a laptop reselling business. His biggest frustration: he'd spend 20 minutes per customer copy-pasting specs, typing out EMI breakdowns, and comparing models on WhatsApp. Now DealKaro sends a formatted spec card, calculates EMI options, and even tracks whether the customer opened it. His average enquiry-to-order cycle dropped from 3 days to 6 hours.",
    steps: [
      { icon: "💬", label: "Customer asks for laptop under ₹60k" },
      { icon: "📊", label: "AI sends spec card + EMI options" },
      { icon: "🔁", label: "Customer compares 2 shortlisted models" },
      { icon: "🛒", label: "Booking amount collected via UPI" },
    ],
    mock: (
      <MockShell title="Product Spec Card — Laptops">
        <div className="rounded-xl p-3 mb-3" style={{ background: "#f5f3ff", border: "1px solid #e0e7ff" }}>
          <p className="text-[10px] font-bold mb-1" style={{ color: "#6366f1" }}>🏆 Best Match for ₹60k budget</p>
          <p className="text-xs font-extrabold" style={{ color: "#111827" }}>Dell Inspiron 15 — 16GB / 512GB SSD</p>
          <p className="text-[10px] mt-1" style={{ color: "#6b7280" }}>Intel i5-13th Gen · 15.6" FHD · 1yr warranty</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-black" style={{ color: "#6366f1" }}>₹57,990</span>
            <span className="text-[9px] line-through" style={{ color: "#9ca3af" }}>₹64,000</span>
          </div>
        </div>
        <p className="text-[10px] font-bold mb-2" style={{ color: "#9ca3af" }}>EMI OPTIONS</p>
        {[
          { bank: "HDFC",  emi: "₹4,833/mo", months: "12 mo" },
          { bank: "SBI",   emi: "₹5,200/mo", months: "10 mo" },
          { bank: "No-cost", emi: "₹9,665/mo", months: "6 mo" },
        ].map(e => (
          <div key={e.bank} className="flex items-center justify-between py-1.5">
            <span className="text-xs font-semibold" style={{ color: "#374151" }}>{e.bank}</span>
            <span className="text-xs font-bold" style={{ color: "#6366f1" }}>{e.emi} · {e.months}</span>
          </div>
        ))}
        <button className="mt-3 w-full py-2 rounded-xl text-xs font-bold text-white" style={{ background: "#6366f1" }}>📤 Share via WhatsApp</button>
      </MockShell>
    ),
  },
  /* ─── 4. Flower Stores ──────────────────────────────────────── */
  {
    emoji: "🌸", category: "Flower Stores", accent: "#ec4899",
    story: "Bloom & Co. in Bangalore gets flooded with orders during festivals and Valentine's Day. Before DealKaro, the team would scramble to reply to 200+ messages manually, often losing track of custom orders. Now occasion-based catalogues go out automatically to subscribers, custom bouquet orders arrive with full details and advance payment, and reminder messages go out 2 hours before delivery. The team handles 200+ orders with just 3 people.",
    steps: [
      { icon: "📅", label: "Occasion catalogue auto-broadcast" },
      { icon: "💐", label: "Custom bouquet order captured" },
      { icon: "💸", label: "₹500 advance via UPI link" },
      { icon: "🚚", label: "Delivery reminder 2 hr before" },
    ],
    mock: (
      <MockShell title="Occasion Orders — Flower Store">
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
          {["All", "Valentine's", "Wedding", "Birthday"].map((t, i) => (
            <button key={t} className="shrink-0 px-3 py-1 rounded-full text-[10px] font-bold"
              style={{ background: i === 0 ? "#ec4899" : "#fdf2f8", color: i === 0 ? "#fff" : "#ec4899" }}>{t}</button>
          ))}
        </div>
        {[
          { name: "Nisha R.",  item: "Red Rose Bouquet 25 stems", date: "Sat 6 PM",  paid: true  },
          { name: "Vikram T.", item: "Anniversary Arrangement",   date: "Sat 8 PM",  paid: false },
          { name: "Pooja M.",  item: "Sunflower Mix 50 stems",    date: "Sun 10 AM", paid: true  },
        ].map(o => (
          <div key={o.name} className="flex items-start gap-2.5 py-2.5 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
            <span className="text-xl shrink-0">💐</span>
            <div className="flex-1">
              <p className="text-xs font-bold" style={{ color: "#111827" }}>{o.name}</p>
              <p className="text-[10px]" style={{ color: "#6b7280" }}>{o.item}</p>
              <p className="text-[9px] mt-0.5" style={{ color: "#9ca3af" }}>🕐 {o.date}</p>
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
              style={{ background: o.paid ? "#f0fdf4" : "#fef3c7", color: o.paid ? "#16a34a" : "#92400e" }}>
              {o.paid ? "Paid ✓" : "Advance due"}
            </span>
          </div>
        ))}
      </MockShell>
    ),
  },
  /* ─── 5. Distributors ───────────────────────────────────────── */
  {
    emoji: "📦", category: "Distributors & Franchise Networks", accent: "#4A148C",
    story: "KiraanKing manages 40 sub-sellers across Delhi NCR. Before DealKaro, every seller was texting him separately for product lists, order confirmations, and commission disputes. Now he pushes catalogue updates to all 40 sellers in one click, commission percentages are auto-calculated on every order, and his monthly payout report is generated in seconds. He runs ₹12 lakh GMV every month from his phone.",
    steps: [
      { icon: "🏪", label: "New seller onboarded in 10 min" },
      { icon: "📡", label: "Catalogue pushed to all sellers" },
      { icon: "📊", label: "Orders tracked, commission calculated" },
      { icon: "💸", label: "Payout report generated & sent" },
    ],
    mock: (
      <MockShell title="Seller Network Dashboard">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[{ v: "40", l: "Sellers" }, { v: "₹12L", l: "GMV" }, { v: "₹88K", l: "Commissions" }].map(s => (
            <div key={s.l} className="rounded-xl p-2 text-center" style={{ background: "#f0fdf4" }}>
              <p className="text-sm font-extrabold" style={{ color: "#111827" }}>{s.v}</p>
              <p className="text-[9px]" style={{ color: "#6b7280" }}>{s.l}</p>
            </div>
          ))}
        </div>
        {[
          { name: "Meena Traders",  orders: 34, comm: "₹2,100", bar: 85 },
          { name: "Raj Boutique",   orders: 21, comm: "₹1,400", bar: 55 },
          { name: "Sona Jewellers", orders: 18, comm: "₹1,050", bar: 42 },
        ].map(s => (
          <div key={s.name} className="mb-3">
            <div className="flex justify-between mb-1">
              <div>
                <p className="text-xs font-bold" style={{ color: "#111827" }}>{s.name}</p>
                <p className="text-[9px]" style={{ color: "#6b7280" }}>{s.orders} orders</p>
              </div>
              <span className="text-xs font-extrabold" style={{ color: "#4A148C" }}>{s.comm}</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#f3f4f6" }}>
              <div className="h-full rounded-full" style={{ background: "#4A148C", width: `${s.bar}%` }} />
            </div>
          </div>
        ))}
        <div className="mt-3 p-2.5 rounded-xl" style={{ background: "#f0fdf4", border: "1px solid #d1fae5" }}>
          <p className="text-[10px] font-bold" style={{ color: "#16a34a" }}>🔗 dealkaro.in/ref/meena-traders</p>
        </div>
      </MockShell>
    ),
  },
];

export default function UseCasesPage() {
  return (
    <div style={{ background: "#F9FBFA" }}>

      {/* Hero */}
      <section className="py-20 text-center" style={{ background: "#111827" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.15)", color: "#CE93D8" }}>
            Use Cases
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Real sellers.{" "}
            <span style={{ color: "#FFD700" }}>Real results.</span>
          </h1>
          <p className="text-lg" style={{ color: "#9ca3af" }}>
            From Pune jewellers to Delhi distributors — see how DealKaro fits every WhatsApp business.
          </p>
        </div>
      </section>

      {/* Use case sections */}
      {USE_CASES.map((uc, idx) => (
        <section
          key={uc.category}
          id={uc.category.toLowerCase().replace(/[^a-z]/g, "-").replace(/-+/g, "-")}
          className="py-20 px-4"
          style={{ background: idx % 2 === 0 ? "#ffffff" : "#F9FBFA" }}
        >
          <div className="max-w-6xl mx-auto">

            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                style={{ background: `${uc.accent}15`, border: `2px solid ${uc.accent}30` }}>
                {uc.emoji}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: uc.accent }}>Use Case</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "#111827" }}>{uc.category}</h2>
              </div>
            </div>

            {/* Story */}
            <div className="mb-10 p-6 rounded-2xl max-w-3xl" style={{ background: `${uc.accent}08`, border: `1px solid ${uc.accent}20` }}>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                <span className="text-lg mr-2">💬</span>{uc.story}
              </p>
            </div>

            {/* Flow */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-center mb-6" style={{ color: "#9ca3af" }}>The DealKaro flow</p>
            <FlowStrip steps={uc.steps} accent={uc.accent} />

            {/* Mock UI */}
            <div className="flex justify-center">
              {uc.mock}
            </div>

          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 text-center px-4" style={{ background: "#111827" }}>
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Your business. Your flow.
        </h2>
        <p className="mb-8" style={{ color: "#9ca3af" }}>Whatever you sell — DealKaro fits. Start in 10 minutes.</p>
        <a href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white"
          style={{ background: "#4A148C", boxShadow: "0 6px 24px rgba(74,20,140,0.35)" }}>
          Get Started Free →
        </a>
      </section>

    </div>
  );
}
