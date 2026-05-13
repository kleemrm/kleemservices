/* ProductScreenshots.tsx — 6 Mock UI panels — Kleem Purple/Yellow palette */
const P = "#4A148C";
const A = "#FFD700";

export default function ProductScreenshots() {
  return (
    <section
      id="product-screens"
      className="py-20 lg:py-28"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span
            className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}
          >
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "#111827" }}>
            Every screen built for <span style={{ color: P }}>WhatsApp sellers</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: "#6b7280" }}>
            Clean, fast, mobile-first. No training needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

          {/* ── 1. Prospect / Money List ── */}
          <MockCard label="Prospect List — Money List" icon="🎯">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl mb-3" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
              <span className="text-sm">🔍</span>
              <span className="text-xs" style={{ color: "#9ca3af" }}>Search leads…</span>
            </div>
            {[
              { name: "Priya Sharma", item: "Kanjivaram Saree", days: "3 days", hot: true,  status: "Hot",       statusColor: "#ef4444" },
              { name: "Ravi Mehta",   item: "Gold Earrings",    days: "1 day",  hot: false, status: "Follow up", statusColor: "#f59e0b" },
              { name: "Anita Patel",  item: "Banarasi Dupatta", days: "5 days", hot: false, status: "New",       statusColor: "#6366f1" },
              { name: "Suresh Joshi", item: "Silver Anklet",    days: "2 days", hot: true,  status: "Hot",       statusColor: "#ef4444" },
            ].map((lead) => (
              <div key={lead.name} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 text-white"
                  style={{ background: lead.hot ? "#ef4444" : P }}>
                  {lead.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold truncate" style={{ color: "#111827" }}>{lead.name}</p>
                    {lead.hot && <span className="text-xs">🔥</span>}
                  </div>
                  <p className="text-[10px] truncate" style={{ color: "#6b7280" }}>{lead.item}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: lead.statusColor }}>
                    {lead.status}
                  </span>
                  <span className="text-[9px]" style={{ color: "#9ca3af" }}>{lead.days} ago</span>
                </div>
              </div>
            ))}
            <button className="mt-3 w-full py-2 rounded-xl text-xs font-bold" style={{ background: A, color: "#111827" }}>
              + Add Lead
            </button>
          </MockCard>

          {/* ── 2. Catalogue Sharing ── */}
          <MockCard label="Catalogue Sharing" icon="📦">
            <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl" style={{ background: "#F3E5F5", border: "1px solid #E1BEE7" }}>
              <span className="text-[10px] font-mono truncate flex-1" style={{ color: "#7B1FA2" }}>
                dealkaro.in/priya-jewels
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg text-white shrink-0" style={{ background: P }}>Copy</span>
            </div>
            {[
              { name: "Kanjivaram Saree", price: "₹8,500", tag: "Bestseller", img: "🥻" },
              { name: "Gold Jhumka Set",  price: "₹4,200", tag: "New",        img: "💛" },
              { name: "Pearl Necklace",   price: "₹6,800", tag: "Limited",    img: "📿" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-3 mb-2.5 p-2.5 rounded-xl" style={{ border: "1px solid #f3f4f6" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0" style={{ background: "#fdf6ec" }}>
                  {p.img}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate" style={{ color: "#111827" }}>{p.name}</p>
                  <p className="text-xs font-extrabold" style={{ color: P }}>{p.price}</p>
                </div>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
                  style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}>{p.tag}</span>
              </div>
            ))}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                style={{ background: "#25D366", color: "#ffffff" }}>
                <span>💬</span> Share on WhatsApp
              </button>
              <button className="px-3 py-2 rounded-xl text-xs font-bold" style={{ border: "1.5px solid #e5e7eb", color: "#374151" }}>
                🔗 Link
              </button>
            </div>
          </MockCard>

          {/* ── 3. Customer Activity Timeline ── */}
          <MockCard label="Customer Activity" icon="📊">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold" style={{ color: "#ea580c" }}>P</div>
              <div>
                <p className="text-xs font-bold" style={{ color: "#111827" }}>Priya Sharma</p>
                <p className="text-[10px]" style={{ color: "#6b7280" }}>+91 98765 43210</p>
              </div>
              <span className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: "#ef4444" }}>🔥 Hot</span>
            </div>
            <div className="relative pl-5">
              <div className="absolute left-1.5 top-0 bottom-0 w-0.5" style={{ background: "#e5e7eb" }} />
              {[
                { time: "2:10 PM", event: "Opened catalogue link",       icon: "👁",  color: "#6366f1" },
                { time: "2:14 PM", event: "Viewed Kanjivaram Saree 3×",  icon: "🔁",  color: "#f59e0b" },
                { time: "2:18 PM", event: "Added to wishlist",           icon: "❤️",  color: "#ec4899" },
                { time: "2:22 PM", event: "🔥 Hot Lead Alert triggered", icon: "🔥",  color: "#ef4444" },
                { time: "2:25 PM", event: "Follow-up reminder sent",     icon: "🔔",  color: P },
              ].map((ev) => (
                <div key={ev.time} className="flex items-start gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 -ml-[9px] z-10 ring-2 ring-white"
                    style={{ background: ev.color }}>
                    {ev.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "#111827" }}>{ev.event}</p>
                    <p className="text-[9px]" style={{ color: "#9ca3af" }}>{ev.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-2 w-full py-2 rounded-xl text-xs font-bold" style={{ background: A, color: "#111827" }}>
              💳 Send Payment Link
            </button>
          </MockCard>

          {/* ── 4. Order Management ── */}
          <MockCard label="Order Management" icon="🛒">
            <div className="flex gap-1 mb-4 p-1 rounded-xl" style={{ background: "#f3f4f6" }}>
              {["Manual", "Prepaid"].map((t, i) => (
                <button key={t} className="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all"
                  style={{ background: i === 0 ? P : "transparent", color: i === 0 ? "#fff" : "#6b7280" }}>
                  {t}
                </button>
              ))}
            </div>
            {[
              { id: "#DK-2841", name: "Priya Sharma",  item: "Kanjivaram Saree", amt: "₹8,500", status: "Confirmed", color: P       },
              { id: "#DK-2840", name: "Ravi Mehta",    item: "Gold Earrings",    amt: "₹4,200", status: "Shipped",   color: "#6366f1" },
              { id: "#DK-2839", name: "Anita Patel",   item: "Pearl Necklace",   amt: "₹6,800", status: "Pending",   color: "#f59e0b" },
              { id: "#DK-2838", name: "Suresh Joshi",  item: "Silver Anklet",    amt: "₹2,100", status: "Confirmed", color: P       },
            ].map((o) => (
              <div key={o.id} className="flex items-center gap-2.5 py-2.5 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[10px] font-mono" style={{ color: "#9ca3af" }}>{o.id}</p>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ background: o.color }}>{o.status}</span>
                  </div>
                  <p className="text-xs font-bold" style={{ color: "#111827" }}>{o.name}</p>
                  <p className="text-[10px] truncate" style={{ color: "#6b7280" }}>{o.item}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-extrabold" style={{ color: P }}>{o.amt}</p>
                  <p className="text-[9px] mt-0.5 px-1.5 py-0.5 rounded-lg cursor-pointer" style={{ background: "#F3E5F5", color: "#7B1FA2" }}>💳 Send link</p>
                </div>
              </div>
            ))}
          </MockCard>

          {/* ── 5. AI Brand Brain ── */}
          <MockCard label="AI Brand Brain" icon="🧠">
            <div className="p-3 rounded-xl mb-3" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
              <p className="text-[10px] font-bold mb-1" style={{ color: "#6b7280" }}>PRODUCT INPUT</p>
              <p className="text-xs font-semibold" style={{ color: "#111827" }}>Banarasi Silk Saree (Red), Handwoven</p>
            </div>
            <div className="p-3 rounded-xl mb-3" style={{ background: "rgba(74,20,140,0.06)", border: "1px solid rgba(74,20,140,0.2)" }}>
              <p className="text-[10px] font-bold mb-1" style={{ color: "#7B1FA2" }}>✨ AI GENERATED</p>
              <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>
                <strong>Crimson Banarasi Glory</strong> — Exquisite handwoven Banarasi silk in rich crimson with golden zari work. Perfect for weddings, pujas &amp; festive celebrations. Limited pieces available.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-extrabold" style={{ color: P }}>₹12,500</span>
                <span className="text-[9px] line-through" style={{ color: "#9ca3af" }}>₹15,000</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "#fef3c7", color: "#92400e" }}>17% off</span>
              </div>
            </div>
            <p className="text-[10px] font-bold mb-2" style={{ color: "#6b7280" }}>ONBOARDING CHECKLIST</p>
            {[
              { step: "Connect WhatsApp Business", done: true  },
              { step: "Upload product catalogue",  done: true  },
              { step: "Set AI reply rules",         done: true  },
              { step: "Go live & share store link", done: false },
            ].map((c) => (
              <div key={c.step} className="flex items-center gap-2 mb-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[9px]"
                  style={{ background: c.done ? P : "#e5e7eb", color: c.done ? "#fff" : "#9ca3af" }}>
                  {c.done ? "✓" : ""}
                </div>
                <p className="text-[10px]" style={{ color: c.done ? "#111827" : "#9ca3af" }}>{c.step}</p>
              </div>
            ))}
          </MockCard>

          {/* ── 6. Multi-Seller / Referral ── */}
          <MockCard label="Multi-Seller & Referrals" icon="🤝">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { val: "12",      label: "Sellers",     bg: "#F3E5F5" },
                { val: "₹84,200", label: "Network GMV", bg: "#fefce8" },
                { val: "₹6,200",  label: "Commissions", bg: "#F3E5F5" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-2 text-center" style={{ background: s.bg }}>
                  <p className="text-sm font-extrabold" style={{ color: "#111827" }}>{s.val}</p>
                  <p className="text-[9px]" style={{ color: "#6b7280" }}>{s.label}</p>
                </div>
              ))}
            </div>
            {[
              { name: "Meena Traders",  orders: 34, comm: "₹2,100", ref: 3, bar: 85 },
              { name: "Raj Boutique",   orders: 21, comm: "₹1,400", ref: 2, bar: 55 },
              { name: "Sona Jewellers", orders: 18, comm: "₹1,050", ref: 1, bar: 42 },
            ].map((s) => (
              <div key={s.name} className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#111827" }}>{s.name}</p>
                    <p className="text-[9px]" style={{ color: "#6b7280" }}>{s.orders} orders · {s.ref} referrals</p>
                  </div>
                  <span className="text-xs font-extrabold" style={{ color: P }}>{s.comm}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#f3f4f6" }}>
                  <div className="h-full rounded-full" style={{ background: P, width: `${s.bar}%` }} />
                </div>
              </div>
            ))}
            <div className="mt-3 p-3 rounded-xl" style={{ background: "#F3E5F5", border: "1px solid #E1BEE7" }}>
              <p className="text-[10px] font-bold mb-1.5" style={{ color: "#7B1FA2" }}>🔗 YOUR REFERRAL LINK</p>
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-mono flex-1 truncate" style={{ color: "#374151" }}>dealkaro.in/ref/meena-traders</p>
                <button className="text-[10px] font-bold px-2 py-1 rounded-lg shrink-0" style={{ background: P, color: "#fff" }}>Copy</button>
              </div>
            </div>
          </MockCard>

        </div>
      </div>
    </section>
  );
}

/* ── Shared card wrapper ── */
function MockCard({ label, icon, children }: { label: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden shadow-lg"
      style={{ border: "1px solid #f3f4f6", boxShadow: "0 4px 24px rgba(17,24,39,0.07)" }}>
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#111827" }}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A148C" }} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#9ca3af" }}>
          {icon} {label}
        </span>
      </div>
      <div className="flex-1 bg-white p-4">{children}</div>
    </div>
  );
}
