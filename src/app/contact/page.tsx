"use client";
import { useState } from "react";

const P = "#4A148C";
const A = "#FFD700";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ background: "#F9FBFA" }}>

      {/* Hero */}
      <section className="py-20 text-center" style={{ background: "#111827" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.2)", color: "#CE93D8" }}>
            Contact & Demo
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Let&apos;s get you <span style={{ color: A }}>selling smarter.</span>
          </h1>
          <p className="text-lg" style={{ color: "#9ca3af" }}>
            Talk to us on WhatsApp, book a 15-min demo, or just drop your details.
          </p>
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "rgba(74,20,140,0.15)", color: "#CE93D8" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: P }} />
            Average response time: <strong className="text-white ml-1">47 minutes</strong>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — Form + Demo */}
          <div className="flex flex-col gap-6">

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
              <h2 className="text-2xl font-extrabold mb-1" style={{ color: "#111827" }}>Send us a message</h2>
              <p className="text-sm mb-7" style={{ color: "#6b7280" }}>We&apos;ll reach out within 2 hours on WhatsApp or call.</p>

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                    style={{ background: "rgba(74,20,140,0.1)" }}>✅</div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ color: "#111827" }}>Message received!</h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>Expect a WhatsApp message from our team within 47 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold mb-1.5" style={{ color: "#374151" }}>Your name *</label>
                    <input id="contact-name" required type="text" placeholder="Priya Sharma"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb", color: "#111827" }} />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-bold mb-1.5" style={{ color: "#374151" }}>Business type *</label>
                    <select id="contact-business" required value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                      style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb", color: form.business ? "#111827" : "#9ca3af" }}>
                      <option value="">Select your business type</option>
                      {["Jewellery / Saree Seller","Baker / Home Chef","Laptop / Electronics","Flower Store","Distributor / Franchise","Clothing / Fashion","Other"].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold mb-1.5" style={{ color: "#374151" }}>WhatsApp / Phone *</label>
                    <input id="contact-phone" required type="tel" placeholder="+91 98765 43210"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb", color: "#111827" }} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold mb-1.5" style={{ color: "#374151" }}>What do you sell? (optional)</label>
                    <textarea id="contact-message" rows={3} placeholder="E.g. I sell handmade jewellery and want to automate follow-ups…"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb", color: "#111827" }} />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-2xl font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                    style={{ background: A, color: "#111827" }}>
                    Send message →
                  </button>
                  <p className="text-center text-xs" style={{ color: "#9ca3af" }}>We reply within 47 minutes · No spam, ever</p>
                </form>
              )}
            </div>

            {/* Demo booking */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(74,20,140,0.1)" }}>📅</div>
                <div>
                  <h3 className="font-extrabold text-base" style={{ color: "#111827" }}>Book a 15-min demo</h3>
                  <p className="text-xs" style={{ color: "#6b7280" }}>Live walkthrough tailored to your business type</p>
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>Pick a slot this week</p>
              <div className="grid grid-cols-3 gap-2 mb-5">
                {["Mon 9 AM","Mon 2 PM","Mon 5 PM","Tue 10 AM","Tue 3 PM","Wed 11 AM"].map((slot, i) => (
                  <button key={slot} className="py-2 px-2 rounded-xl text-xs font-semibold transition-all hover:opacity-80"
                    style={{ background: i === 0 ? P : "rgba(74,20,140,0.08)", color: i === 0 ? "#ffffff" : P, border: i === 0 ? "none" : `1px solid rgba(74,20,140,0.2)` }}>
                    {slot}
                  </button>
                ))}
              </div>
              <a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%2015-min%20demo" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "#111827" }}>
                📅 Confirm slot via WhatsApp
              </a>
            </div>
          </div>

          {/* Right — WhatsApp CTA + Support cards */}
          <div className="flex flex-col gap-6">

            {/* WhatsApp CTA — kept green for brand recognition */}
            <a id="whatsapp-cta"
              href="https://wa.me/919876543210?text=Hi%20DealKaro%2C%20I%20want%20to%20know%20more"
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 py-10 px-8 rounded-3xl font-bold text-white text-center transition-all hover:opacity-95 hover:scale-[1.01] active:scale-95"
              style={{ background: "linear-gradient(145deg,#25D366,#1aad53)", boxShadow: "0 12px 40px rgba(37,211,102,0.4)" }}>
              <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <p className="text-xl font-extrabold">Chat with us on WhatsApp</p>
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>Instant reply · No forms needed</p>
              </div>
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(0,0,0,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                We&apos;re online now
              </div>
            </a>

            {/* Support cards */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
              <h3 className="font-extrabold text-lg mb-1" style={{ color: "#111827" }}>Direct support</h3>
              <p className="text-xs mb-6" style={{ color: "#6b7280" }}>
                Real humans, not bots. Average response: <strong style={{ color: P }}>47 minutes</strong>
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { id: "support-whatsapp", icon: "💬", label: "WhatsApp", value: "+91 98765 43210", sub: "Fastest response",     href: "https://wa.me/919876543210", accent: "#25D366" },
                  { id: "support-email",    icon: "✉️", label: "Email",    value: "hello@dealkaro.in", sub: "For detailed queries", href: "mailto:hello@dealkaro.in",   accent: "#6366f1" },
                  { id: "support-call",     icon: "📞", label: "Call us",  value: "+91 98765 43210", sub: "Mon–Sat, 9AM–8PM IST", href: "tel:+919876543210",          accent: "#f59e0b" },
                ].map((item) => (
                  <a key={item.id} id={item.id} href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                    style={{ border: `1.5px solid ${item.accent}20`, background: `${item.accent}06` }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: `${item.accent}15` }}>{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#9ca3af" }}>{item.label}</p>
                      <p className="text-sm font-bold" style={{ color: "#111827" }}>{item.value}</p>
                      <p className="text-[10px]" style={{ color: "#6b7280" }}>{item.sub}</p>
                    </div>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke={item.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-5 text-center" style={{ background: "#111827", border: "1px solid rgba(74,20,140,0.2)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#9ca3af" }}>Support hours</p>
              <p className="text-base font-extrabold text-white">Mon – Sat &nbsp;·&nbsp; 9 AM – 8 PM IST</p>
              <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Outside hours? Leave a message — we reply first thing morning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
