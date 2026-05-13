// src/app/page.tsx  –  Static marketing homepage (Phases 2 & 3, Sections 1-8)
// No client state, no backend calls — pure Server Component.

import {
  Gem,
  CakeSlice,
  Flower,
  Laptop,
  Users,
  Network,
  ShoppingBag,
  Store,
} from "lucide-react";
import ProductScreenshots from "@/components/ProductScreenshots";

const P = "#4A148C"; // Kleem Deep Purple
const A = "#FFD700"; // Kleem Bright Yellow

/* ─── §4 Pricing data ──────────────────────────────────────── */
const PLANS = [
  {
    name: "Money List",
    setup: "₹999",
    price: "₹999",
    period: "/month",
    tagline: "Perfect for solo sellers starting on WhatsApp",
    promise: "Never lose a chat. Never miss a deal.",
    color: "white",
    features: [
      "WhatsApp + manual lead capture",
      "Money List — prospects dashboard",
      "Curated catalogue sharing",
      "Cart & wishlist tracking",
      "Basic order management",
      "Basic invoicing",
      "Payment link generation",
      "Simple store page",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Intent Engine",
    setup: "₹1,999",
    price: "₹1,999",
    period: "/month",
    tagline: "For growing sellers who want to close faster",
    promise: "Know who is buying. Close faster.",
    color: "green",
    features: [
      "Everything in Money List +",
      "Follow-up reminders",
      "Hot Lead Signals 🔥",
      "Activity tracking",
      "Quick actions & shortcuts",
      "Quick reply templates",
      "Simple accounting",
      "Purchase orders",
      "Basic inventory",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Distribution King",
    setup: "₹2,999",
    price: "₹2,999",
    period: "/month",
    tagline: "For power sellers building a network",
    promise: "Build your own selling network.",
    color: "dark",
    features: [
      "Everything in Intent Engine +",
      "Multi-seller system",
      "Commission & referral handling",
      "Central product repository",
      "Multi-language support",
      "AI Brand Brain",
      "AI onboarding",
      "Content management",
      "Advanced inventory",
      "UGC & feedback capture",
      "Medini integration",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

/* ─── §5 AI Brain features ─────────────────────────────────── */
const AI_FEATURES = [
  { icon: "🧠", title: "Smart Reply Engine",            desc: "Contextually aware AI that handles FAQs, pricing queries, and order confirmations — in seconds.", comingSoon: false },
  { icon: "🎯", title: "Lead Scoring",                  desc: "Automatically ranks leads by intent so your team focuses on buyers, not browsers.", comingSoon: false },
  { icon: "📝", title: "Catalogue Copywriter",          desc: "Generates compelling product descriptions from a photo and a few keywords.", comingSoon: false },
  { icon: "📊", title: "Sales Insights",                desc: "Daily summaries of revenue, top products, and conversion trends — straight to WhatsApp.", comingSoon: false },
  { icon: "🔔", title: "Follow-up Automation",          desc: "Sends perfectly timed nudges to warm leads without you lifting a finger.", comingSoon: false },
  { icon: "🗣️", title: "Hinglish & Regional Languages", desc: "AI writes in Hinglish, Marathi, Hindi, Tamil, and more — so every local customer feels at home.", comingSoon: false },
  { icon: "📐", title: "Product Standardisation",       desc: "AI normalises product titles, attributes, and descriptions so your catalogue stays clean and consistent.", comingSoon: false },
  { icon: "🚀", title: "AI-Assisted Onboarding",        desc: "Smart guided setup walks new sellers through connecting WhatsApp, uploading catalogue, and going live — step by step.", comingSoon: false },
  { icon: "✨", title: "AI Lead Qualification",         desc: "Coming soon: AI will automatically qualify every inbound lead and route hot prospects to your sales queue.", comingSoon: true },
];

/* ─── §6 Who is it for ─────────────────────────────────────── */
const CATEGORIES = [
  { Icon: Gem,         label: "Jewellery Sellers",  desc: "Showcase collections & take custom orders" },
  { Icon: CakeSlice,   label: "Bakers",              desc: "Daily menus, pre-orders, and delivery slots" },
  { Icon: Flower,      label: "Flower Stores",       desc: "Seasonal arrangements, bulk orders & gifting" },
  { Icon: Laptop,      label: "Laptop Sellers",      desc: "Specs, pricing, trade-ins & warranty queries" },
  { Icon: Users,       label: "Resellers",           desc: "Manage buyer lists, catalogues & commissions" },
  { Icon: Network,     label: "Distributors",        desc: "Multi-seller networks & central product repos" },
  { Icon: ShoppingBag, label: "Boutique Brands",     desc: "Lookbooks, drops, size guides & returns" },
  { Icon: Store,       label: "Local Businesses",    desc: "Any shop selling through WhatsApp chats" },
];

const PAIN_POINTS = [
  {
    icon: "🔕",
    title: "Missed follow-ups",
    desc: "A lead replies once, you forget to follow up, and they buy from a competitor.",
  },
  {
    icon: "💬",
    title: "Leads scattered across chats",
    desc: "Hundreds of chats, zero structure. You have no idea who's serious and who isn't.",
  },
  {
    icon: "👤",
    title: "No customer tracking",
    desc: "Can't remember who asked what, who ordered before, or who went cold.",
  },
  {
    icon: "📋",
    title: "Manual order confusion",
    desc: "Orders taken verbally or in notes. Wrong items, wrong quantities, missed deliveries.",
  },
  {
    icon: "📦",
    title: "Hard to share products properly",
    desc: "Forwarding images and prices individually is exhausting and looks unprofessional.",
  },
  {
    icon: "🔍",
    title: "No visibility into buyer interest",
    desc: "You don't know who viewed your catalogue, who's comparing prices, or who's ready to buy.",
  },
  {
    icon: "🌀",
    title: "No structured selling flow",
    desc: "Every sale is improvised. There's no repeatable system — so results are unpredictable.",
  },
];

const FLOW_STEPS = [
  {
    num: "01",
    icon: "🎯",
    title: "Capture Leads",
    desc: "Auto-capture every new WhatsApp enquiry as a qualified lead.",
  },
  {
    num: "02",
    icon: "🤖",
    title: "AI Qualifies",
    desc: "The AI Brain scores intent, asks smart questions and segments buyers.",
  },
  {
    num: "03",
    icon: "📦",
    title: "Share Catalogue",
    desc: "Send a beautiful, interactive product catalogue in one tap.",
  },
  {
    num: "04",
    icon: "🛒",
    title: "Receive Orders",
    desc: "Orders flow directly into your dashboard — no manual entry.",
  },
  {
    num: "05",
    icon: "💳",
    title: "Collect Payment",
    desc: "Share a payment link or UPI QR; confirmations auto-sync.",
  },
  {
    num: "06",
    icon: "🚚",
    title: "Fulfil & Notify",
    desc: "Trigger delivery and keep the customer updated at every step.",
  },
  {
    num: "07",
    icon: "📈",
    title: "Deliver & Grow",
    desc: "Analyse, re-engage, upsell — and watch revenue compound.",
  },
];

/* ─── WhatsApp flow graphic node ─────────────────────────── */
function FlowNode({
  emoji,
  label,
  accent = false,
}: {
  emoji: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
        style={{
          background: accent ? "#4A148C" : "#ffffff",
          border: accent ? "none" : "1px solid #e5e7eb",
        }}
      >
        {emoji}
      </div>
      <span
        className="text-[11px] font-semibold text-center leading-tight"
        style={{ color: accent ? "#4A148C" : "#374151" }}
      >
        {label}
      </span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div
      className="hidden sm:flex items-center self-start mt-7 text-xl font-bold"
      style={{ color: "#4A148C" }}
    >
      →
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ background: "#F9FBFA" }}>

      {/* ══════════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F3E5F5 0%, #F9FBFA 60%, #EDE7F6 100%)" }}
      >
        {/* Background decoration circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4A148C 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-24 w-[320px] h-[320px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4A148C 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – copy */}
          <div className="flex flex-col gap-7">
            {/* Pill badge */}
            <span
              className="self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#4A148C" }}
              />
              WhatsApp Commerce Platform
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              style={{ color: "#111827" }}
            >
              Get Your Business{" "}
              <span style={{ color: "#4A148C" }}>AI Powered</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              DealKaro turns every WhatsApp conversation into a sale. Capture leads,
              share catalogues, collect orders &amp; payments — fully automated by AI.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#get-started"
                id="hero-cta-primary"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:opacity-90 active:scale-95"
                style={{ background: "#FFD700", color: "#111827", boxShadow: "0 6px 28px rgba(74,20,140,0.3)" }}
              >
                Start Selling Smarter
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"
                  strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#book-demo"
                id="hero-cta-demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold border-2 transition-all duration-200 hover:bg-[#4A148C]/5 active:scale-95"
                style={{ borderColor: "#4A148C", color: "#111827" }}
              >
                📅 Book Demo
              </a>
            </div>

            {/* Social proof micro-strip */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {["🧑‍💼", "👩‍💼", "🧑‍🍳", "👨‍🔧"].map((em, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-lg"
                    style={{ background: "#e5e7eb" }}
                  >
                    {em}
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                <span className="font-bold" style={{ color: "#111827" }}>2,400+</span>{" "}
                businesses already selling smarter
              </p>
            </div>
          </div>

          {/* Right – enhanced visual flow graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md rounded-3xl p-7 shadow-2xl"
              style={{ background: "#ffffff", border: "1px solid rgba(74,20,140,0.15)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#9ca3af" }}>
                DealKaro selling flow
              </p>

              {/* ── 5-step pipeline ── */}
              <div className="flex items-center justify-between gap-1 mb-6">
                {[
                  { emoji: "💬", label: "WhatsApp", accent: false },
                  { emoji: "🎯", label: "Lead",      accent: true  },
                  { emoji: "📦", label: "Catalogue", accent: false },
                  { emoji: "🛒", label: "Order",     accent: true  },
                  { emoji: "💳", label: "Payment",   accent: false },
                ].map((node, i, arr) => (
                  <div key={node.label} className="flex items-center gap-1">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm"
                        style={{
                          background: node.accent ? "#4A148C" : "#f9fafb",
                          border: node.accent ? "none" : "1.5px solid #e5e7eb",
                        }}
                      >
                        {node.emoji}
                      </div>
                      <span className="text-[10px] font-semibold" style={{ color: node.accent ? "#4A148C" : "#6b7280" }}>
                        {node.label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <svg className="w-5 h-5 shrink-0 mb-3" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M12 6l4 4-4 4" stroke="#4A148C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* ── Live activity feed ── */}
              <div className="flex flex-col gap-2 mb-5">
                {[
                  { dot: "#4A148C", text: "Priya viewed Kanjivaram Red — 3 times today" },
                  { dot: "#f59e0b", text: "Ravi abandoned cart — ₹4,500 pending" },
                  { dot: "#6366f1", text: "AI sent catalogue to 12 new leads" },
                ].map((item) => (
                  <div key={item.text}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs"
                    style={{ background: "#f9fafb", border: "1px solid #f3f4f6" }}>
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: item.dot }} />
                    <span style={{ color: "#374151" }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* ── Metrics strip ── */}
              <div className="grid grid-cols-3 gap-3 rounded-2xl p-4" style={{ background: "#F3E5F5" }}>
                {[
                  { val: "94%", label: "Reply rate" },
                  { val: "3×",  label: "More orders" },
                  { val: "0",   label: "Missed leads" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-xl font-extrabold" style={{ color: "#4A148C" }}>{val}</p>
                    <p className="text-[11px] font-medium" style={{ color: "#6b7280" }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* ── Floating AI hint badges ── */}
              {/* Badge 1 — top right */}
              <div
                className="absolute -top-4 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold text-white shadow-lg animate-bounce"
                style={{ background: "#ef4444" }}
              >
                🔥 Hot lead detected
              </div>

              {/* Badge 2 — top left */}
              <div
                className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold shadow-lg"
                style={{ background: "#111827", color: "#fbbf24" }}
              >
                👁 Customer viewed product again
              </div>

              {/* Badge 3 — right middle */}
              <div
                className="absolute top-1/2 -right-6 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold shadow-lg"
                style={{ background: "#6366f1", color: "#ffffff" }}
              >
                💳 Send payment link
              </div>

              {/* Badge 4 — bottom left */}
              <div
                className="absolute -bottom-3 -left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold shadow-lg"
                style={{ background: "#0ea5e9", color: "#ffffff" }}
              >
                ✍️ AI generated product content
              </div>

              {/* Badge 5 — bottom right */}
              <div
                className="absolute -bottom-4 right-10 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold shadow-lg"
                style={{ background: "#4A148C", color: "#ffffff" }}
              >
                🔔 Lead follow-up reminder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §2  PROBLEM
      ══════════════════════════════════════════════════════════ */}
      <section
        id="problem"
        className="py-20 lg:py-28"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(239,68,68,0.09)", color: "#dc2626" }}
            >
              The Problem
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
              style={{ color: "#111827" }}
            >
              Most businesses{" "}
              <span style={{ color: "#dc2626" }}>lose sales</span>{" "}
              in WhatsApp chats.
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "#6b7280" }}>
              WhatsApp is where your customers are — but without the right system,
              every chat is a missed opportunity.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PAIN_POINTS.map((point) => (
              <div
                key={point.title}
                className="group flex flex-col gap-4 bg-white rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  boxShadow: "0 2px 16px rgba(17,24,39,0.07)",
                  border: "1px solid #f3f4f6",
                }}
              >
                {/* Icon in green circle */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0"
                  style={{ background: "rgba(74,20,140,0.1)" }}
                >
                  {point.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ color: "#111827" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* "Sound familiar?" end card */}
            <div
              className="flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center"
              style={{ background: P }}
            >
              <span className="text-4xl">✨</span>
              <p className="font-extrabold text-white text-lg leading-snug">
                Sound familiar?
              </p>
              <p className="text-white/85 text-sm">
                DealKaro fixes every single one of these.
              </p>
              <a
                href="#features"
                className="mt-2 inline-block px-5 py-2.5 rounded-xl bg-white text-sm font-bold transition-opacity hover:opacity-90"
                style={{ color: P }}
              >
                See how →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §3  FLOW
      ══════════════════════════════════════════════════════════ */}
      <section id="flow" className="py-20 lg:py-28" style={{ background: "#F9FBFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}>
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "#111827" }}>
              One Flow To <span style={{ color: P }}>Run Your Business</span>
            </h2>
            <p className="mt-4 text-base" style={{ color: "#6b7280" }}>
              Seven seamless steps — from first hello to happy customer.
            </p>
          </div>

          {/* ── Horizontal pipeline ── */}
          <div className="mb-14 overflow-x-auto">
            <div className="flex items-center gap-0 min-w-max mx-auto">
              {[
                { icon: "💬", label: "WhatsApp Chat",      sub: "Lead arrives",          color: P },
                { icon: "🎯", label: "Lead Captured",       sub: "Added to Money List",   color: "#6366f1" },
                { icon: "📦", label: "Catalogue Shared",    sub: "Personalised link sent", color: "#f59e0b" },
                { icon: "🛒", label: "Order Placed",        sub: "Confirmed in chat",      color: "#ec4899" },
                { icon: "💳", label: "Payment Collected",   sub: "UPI / payment link",     color: P },
              ].map((node, i, arr) => (
                <div key={node.label} className="flex items-center">
                  <div className="flex flex-col items-center text-center w-36">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md mb-3"
                      style={{ background: `${node.color}18`, border: `2px solid ${node.color}35` }}
                    >
                      {node.icon}
                    </div>
                    <p className="text-xs font-extrabold leading-tight" style={{ color: "#111827" }}>{node.label}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "#9ca3af" }}>{node.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center gap-1 px-1 mb-5">
                      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                        <path d="M4 16h20M17 9l7 7-7 7" stroke="#4A148C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Two-column: timeline left, pipeline diagrams right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — 7-step vertical timeline */}
            <div className="relative">
              <div aria-hidden="true" className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, #4A148C, rgba(74,20,140,0.1))" }} />
              <ol className="flex flex-col gap-5">
                {FLOW_STEPS.map((step, idx) => (
                  <li key={step.num} className="relative md:pl-20 flex gap-4 items-start">
                    <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-2xl items-center justify-center text-2xl shadow-md shrink-0"
                      style={{
                        background: idx % 2 === 0 ? "#4A148C" : "#ffffff",
                        border: idx % 2 === 0 ? "none" : "2px solid #4A148C",
                        color: idx % 2 === 0 ? "#ffffff" : "#4A148C",
                      }}>
                      {step.icon}
                    </div>
                    <div className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: "rgba(74,20,140,0.1)" }}>{step.icon}</div>
                    <div className="flex-1 bg-white rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 10px rgba(17,24,39,0.05)" }}>
                      <p className="text-[10px] font-bold tracking-widest mb-0.5" style={{ color: P }}>STEP {step.num}</p>
                      <h3 className="font-bold text-sm mb-0.5" style={{ color: "#111827" }}>{step.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — 5 visual pipeline mini-diagrams */}
            <div className="flex flex-col gap-4">

              {/* Pipeline 1: WhatsApp → Lead → Deal */}
              <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(17,24,39,0.05)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>WhatsApp → Lead → Deal Pipeline</p>
                <div className="flex items-center gap-2">
                  {[
                    { emoji: "💬", label: "Chat",    bg: "#f0fdf4", border: "#d1fae5" },
                    { emoji: "🎯", label: "Lead",    bg: P, border: "none", white: true },
                    { emoji: "🔥", label: "Hot",     bg: "#fef2f2", border: "#fecaca" },
                    { emoji: "🤝", label: "Deal",    bg: P, border: "none", white: true },
                  ].map((n, i, arr) => (
                    <div key={n.label} className="flex items-center gap-2 flex-1">
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ background: n.bg, border: n.white ? "none" : `1.5px solid ${n.border}` }}>{n.emoji}</div>
                        <span className="text-[9px] font-semibold" style={{ color: n.white ? "#CE93D8" : "#6b7280" }}>{n.label}</span>
                      </div>
                      {i < arr.length - 1 && <svg className="w-4 h-4 shrink-0 mb-3 opacity-50" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#4A148C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline 2: Lead → Catalogue → Order */}
              <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(17,24,39,0.05)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>Lead → Catalogue → Order Flow</p>
                <div className="flex items-center gap-2">
                  {[
                    { emoji: "👤", label: "Lead",      bg: "#f0fdf4" },
                    { emoji: "📦", label: "Catalogue",  bg: P, white: true },
                    { emoji: "🛒", label: "Order",      bg: "#fefce8" },
                    { emoji: "💳", label: "Payment",    bg: P, white: true },
                    { emoji: "✅", label: "Confirmed",  bg: "#f0fdf4" },
                  ].map((n, i, arr) => (
                    <div key={n.label} className="flex items-center gap-1 flex-1">
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                          style={{ background: n.bg, border: n.white ? "none" : "1.5px solid #e5e7eb" }}>{n.emoji}</div>
                        <span className="text-[9px] font-semibold text-center leading-tight" style={{ color: n.white ? "#CE93D8" : "#6b7280" }}>{n.label}</span>
                      </div>
                      {i < arr.length - 1 && <svg className="w-3 h-3 shrink-0 mb-3 opacity-40" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="#4A148C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline 3: AI Onboarding Flow */}
              <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(17,24,39,0.05)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>AI Onboarding Flow</p>
                <div className="flex items-center gap-2">
                  {[
                    { emoji: "📱", label: "Connect" },
                    { emoji: "🧠", label: "Train AI" },
                    { emoji: "⚙️", label: "Setup Rules" },
                    { emoji: "🚀", label: "Go Live" },
                  ].map((n, i, arr) => (
                    <div key={n.label} className="flex items-center gap-2 flex-1">
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ background: i === 1 || i === 3 ? "#111827" : "rgba(74,20,140,0.1)" }}>{n.emoji}</div>
                        <span className="text-[9px] font-semibold" style={{ color: "#6b7280" }}>{n.label}</span>
                      </div>
                      {i < arr.length - 1 && <svg className="w-4 h-4 shrink-0 mb-3 opacity-50" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#4A148C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline 4: Seller Network Flow */}
              <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(17,24,39,0.05)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>Seller Network Flow</p>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md"
                      style={{ background: `linear-gradient(135deg,${P},#6A1E9E)` }}>🏢</div>
                    <span className="text-[9px] font-semibold" style={{ color: P }}>Your Brand</span>
                  </div>
                  <svg className="flex-1 h-4" viewBox="0 0 60 16" fill="none">
                    <line x1="0" y1="8" x2="60" y2="8" stroke="#4A148C" strokeWidth="1.5" strokeDasharray="4 3"/>
                  </svg>
                  <div className="flex gap-2">
                    {["🛍️","🎂","💍"].map((em) => (
                      <div key={em} className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                        style={{ background: "#f9fafb", border: "1.5px solid rgba(74,20,140,0.2)" }}>{em}</div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold" style={{ color: "#9ca3af" }}>Sellers</span>
                </div>
              </div>

              {/* Pipeline 5: Commission Flow */}
              <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(17,24,39,0.05)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>Multi-Seller Commission Flow</p>
                <div className="flex items-center gap-2">
                  {[
                    { emoji: "🛒", label: "Sale Made", bg: "#f0fdf4" },
                    { emoji: "💰", label: "Revenue",   bg: "#fefce8" },
                    { emoji: "📊", label: "Split",     bg: P, white: true },
                    { emoji: "🤝", label: "Commission",bg: "#f0fdf4" },
                  ].map((n, i, arr) => (
                    <div key={n.label} className="flex items-center gap-2 flex-1">
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ background: n.bg, border: n.white ? "none" : "1.5px solid #e5e7eb" }}>{n.emoji}</div>
                        <span className="text-[9px] font-semibold text-center" style={{ color: n.white ? "#CE93D8" : "#6b7280" }}>{n.label}</span>
                      </div>
                      {i < arr.length - 1 && <svg className="w-4 h-4 shrink-0 mb-3 opacity-50" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#4A148C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <a href="#get-started"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:opacity-90 active:scale-95"
              style={{ background: P, boxShadow: "0 6px 28px rgba(74,20,140,0.35)" }}>
              Get started free — it takes 2 minutes
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §3b PRODUCT SCREENSHOTS
      ══════════════════════════════════════════════════════════ */}
      <ProductScreenshots />

      {/* ══════════════════════════════════════════════════════════
          §4  PRICING
      ══════════════════════════════════════════════════════════ */}
      <section
        id="pricing"
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
              Pricing
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "#111827" }}
            >
              Built for{" "}
              <span style={{ color: A }}>Real Sellers</span>
            </h2>
            <p className="mt-4 text-base" style={{ color: "#6b7280" }}>
              No hidden fees. Cancel any time. Start free for 14 days.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan) => {
              const isGreen = plan.color === "green";
              const isDark  = plan.color === "dark";
              return (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-3xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: isGreen
                      ? `linear-gradient(145deg, ${P} 0%, #6A1E9E 100%)`
                      : isDark
                      ? "#111827"
                      : "#ffffff",
                    border: isGreen
                      ? "none"
                      : isDark
                      ? "none"
                      : "1px solid #e5e7eb",
                    boxShadow: isGreen
                      ? "0 20px 60px rgba(74,20,140,0.35)"
                      : "0 4px 24px rgba(17,24,39,0.08)",
                  }}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold bg-white shadow-md"
                      style={{ color: P }}>
                      ✦ Most Popular
                    </span>
                  )}

                  {/* Plan name + tagline */}
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: isGreen ? "rgba(255,255,255,0.75)" : isDark ? "#9ca3af" : "#9ca3af" }}
                  >
                    {plan.name}
                  </p>
                  {/* Price display — setup + monthly */}
                  <div className="mb-1">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl font-extrabold"
                        style={{ color: isGreen || isDark ? "#ffffff" : "#111827" }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: isGreen ? "rgba(255,255,255,0.7)" : isDark ? "#6b7280" : "#9ca3af" }}
                      >
                        {plan.period}
                      </span>
                    </div>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: isGreen ? "rgba(255,255,255,0.6)" : isDark ? "#6b7280" : "#9ca3af" }}
                    >
                      + {plan.setup} one-time setup
                    </p>
                  </div>
                  <p
                    className="text-sm mb-6"
                    style={{ color: isGreen ? "rgba(255,255,255,0.8)" : isDark ? "#9ca3af" : "#6b7280" }}
                  >
                    {plan.tagline}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm"
                        style={{ color: isGreen || isDark ? "#e5e7eb" : "#374151" }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] shrink-0"
                          style={{
                            background: isGreen ? "rgba(255,255,255,0.25)" : isDark ? "rgba(74,20,140,0.2)" : "rgba(74,20,140,0.1)",
                            color: isGreen ? "#ffffff" : P,
                          }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#get-started"
                    className="block text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{
                      background: isGreen ? "#ffffff" : isDark ? A : "#111827",
                      color: isGreen ? P : "#ffffff",
                    }}
                  >
                    {plan.cta}
                  </a>

                  {/* Promise tagline */}
                  <p
                    className="mt-4 text-center text-xs font-semibold italic"
                    style={{ color: isGreen ? "rgba(255,255,255,0.75)" : isDark ? A : "#6b7280" }}
                  >
                    &quot;{plan.promise}&quot;
                  </p>
                </div>
              );
            })}
          </div>

          {/* Money-back note */}
          <p className="mt-8 text-center text-sm" style={{ color: "#9ca3af" }}>
            🔒 30-day money-back guarantee · No credit card required to start
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §5  AI BRAIN
      ══════════════════════════════════════════════════════════ */}
      <section id="ai-brain" className="py-20 lg:py-28 overflow-hidden" style={{ background: "#F9FBFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}>
              AI Brain
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: "#111827" }}>
              Your <span style={{ color: A }}>AI Business</span> Assistant
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "#6b7280" }}>
              DealKaro's AI Brain works 24/7 — qualifying leads, writing copy, standardising products,
              and closing deals while you sleep.
            </p>
          </div>

          {/* ── Visual Demo: Photo → Content 4-step flow ── */}
          <div className="mb-14 rounded-3xl p-8 lg:p-10"
            style={{ background: "#111827", border: "1px solid rgba(74,20,140,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color: "#9ca3af" }}>
              Upload product photos → AI creates everything
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Step 1 — Upload Photo */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl p-4 flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "rgba(74,20,140,0.15)" }}>📸</div>
                  <p className="text-xs font-bold text-white">1. Upload Photo</p>
                  {/* Mock image placeholder */}
                  <div className="w-full h-24 rounded-xl flex items-center justify-center text-3xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.12)" }}>💍</div>
                  <p className="text-[10px]" style={{ color: "#6b7280" }}>Drag & drop or tap to upload</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 lg:hidden" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="hidden lg:block w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M5 16h22M19 8l8 8-8 8" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Step 2 — AI Generates */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl p-4 flex flex-col gap-3"
                  style={{ background: "rgba(74,20,140,0.07)", border: "1px solid rgba(74,20,140,0.15)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "rgba(74,20,140,0.2)" }}>🧠</div>
                  <p className="text-xs font-bold" style={{ color: P }}>2. AI Analyses</p>
                  <div className="flex flex-col gap-1.5">
                    {["Detecting product type…", "Reading attributes…", "Writing description…"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-[10px]" style={{ color: "#9ca3af" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: P }} />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full rounded-full" style={{ background: P, width: "80%" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 lg:hidden" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="hidden lg:block w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M5 16h22M19 8l8 8-8 8" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Step 3 — Generated content */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl p-4 flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "rgba(99,102,241,0.2)" }}>✍️</div>
                  <p className="text-xs font-bold text-white">3. Content Created</p>
                  <div className="flex flex-col gap-2 font-mono text-[10px]">
                    <div className="rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.04)", color: "#d1d5db" }}>
                      <span style={{ color: P }}>Name: </span>Eternal Gold Ring 22kt
                    </div>
                    <div className="rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.04)", color: "#d1d5db" }}>
                      <span style={{ color: P }}>Price: </span>₹4,500
                    </div>
                    <div className="rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.04)", color: "#d1d5db" }}>
                      <span style={{ color: P }}>Desc: </span>Handcrafted 22kt gold…
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 lg:hidden" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="hidden lg:block w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M5 16h22M19 8l8 8-8 8" stroke="#4A148C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Step 4 — Store ready */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl p-4 flex flex-col gap-3"
                  style={{ background: "rgba(74,20,140,0.07)", border: "1px solid rgba(74,20,140,0.2)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: P }}>🛍️</div>
                  <p className="text-xs font-bold" style={{ color: P }}>4. Store Ready</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["📦 Catalogue", "💳 Pricing card", "📝 Description", "🌐 Store page"].map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded-full font-semibold"
                        style={{ background: "rgba(74,20,140,0.15)", color: P }}>{tag}</span>
                    ))}
                  </div>
                  <p className="text-[10px] font-semibold" style={{ color: P }}>✓ Published in 1 click</p>
                </div>
              </div>

            </div>
          </div>

          {/* ── Two columns: Terminal mockup + Feature grid ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left – Before / After mockup */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* BEFORE */}
              <div className="rounded-3xl overflow-hidden shadow-lg" style={{ border: "1px solid #f3f4f6" }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>Before</span>
                </div>
                <div className="bg-white p-5">
                  <div className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 mb-4"
                    style={{ background: "#f3f4f6", border: "2px dashed #d1d5db" }}>
                    <span className="text-4xl">📸</span>
                    <p className="text-xs font-semibold text-center" style={{ color: "#6b7280" }}>Uploading photo of gold ring…</p>
                    <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ background: "#e5e7eb" }}>
                      <div className="h-full rounded-full animate-pulse" style={{ background: "#9ca3af", width: "55%" }} />
                    </div>
                    <p className="text-[10px]" style={{ color: "#9ca3af" }}>Processing… 55%</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {["Product name: —", "Price: —", "Description: —"].map((f) => (
                      <div key={f} className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
                        <span className="text-xs" style={{ color: "#9ca3af" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AFTER */}
              <div className="rounded-3xl overflow-hidden shadow-lg" style={{ border: "1.5px solid rgba(74,20,140,0.25)" }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#111827", borderBottom: "1px solid rgba(74,20,140,0.2)" }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: P }} />
                  <span className="ml-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: P }}>AI Output</span>
                </div>
                <div className="bg-white p-5">
                  {/* Product image placeholder */}
                  <div className="w-full aspect-square rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg,#fdf6ec,#fef3c7)" }}>
                    <span className="text-6xl">💍</span>
                    <span className="absolute bottom-2 right-2 text-[9px] font-bold px-2 py-1 rounded-full text-white"
                      style={{ background: P }}>✓ AI Generated</span>
                  </div>
                  {/* Product details */}
                  <h3 className="font-extrabold text-sm mb-1" style={{ color: "#111827" }}>Handcrafted 22K Gold Ring</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#6b7280" }}>
                    Delicate filigree craftsmanship in pure 22kt gold. Perfect for gifting, daily wear, or bridal sets. Available in sizes 6–12.
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-black" style={{ color: "#111827" }}>₹4,999</span>
                      <span className="text-xs line-through ml-2" style={{ color: "#9ca3af" }}>₹6,200</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: "#fef3c7", color: "#92400e" }}>19% off</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl" style={{ background: "#f0fdf4", border: "1px solid #d1fae5" }}>
                    <span className="text-sm">💬</span>
                    <span className="text-xs font-bold" style={{ color: "#16a34a" }}>Ready to share on WhatsApp</span>
                    <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: P }}>Share</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right – 9-feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AI_FEATURES.map((f) => (
                <div key={f.title}
                  className="relative flex gap-3 items-start rounded-2xl p-4 bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    border: f.comingSoon ? "1.5px dashed rgba(74,20,140,0.25)" : "1px solid #f3f4f6",
                    boxShadow: "0 2px 10px rgba(17,24,39,0.05)",
                    opacity: f.comingSoon ? 0.85 : 1,
                  }}>
                  {f.comingSoon && (
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: "#fefce8", color: "#ca8a04", border: "1px solid #fde68a" }}>
                      Coming Soon
                    </span>
                  )}
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: f.comingSoon ? "rgba(74,20,140,0.06)" : "rgba(74,20,140,0.08)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-xs leading-snug mb-0.5" style={{ color: "#111827" }}>{f.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2">
                <a href="#get-started"
                  className="block text-center py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: P, boxShadow: "0 4px 20px rgba(74,20,140,0.3)" }}>
                  See AI Brain in action →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ══════════════════════════════════════════════════════════
          §6  WHO IS IT FOR
      ══════════════════════════════════════════════════════════ */}
      <section
        id="use-cases"
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
              Use Cases
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "#111827" }}
            >
              Made for{" "}
              <span style={{ color: P }}>WhatsApp Businesses</span>
            </h2>
            <p className="mt-4 text-base" style={{ color: "#6b7280" }}>
              Whether you sell jewellery, cakes, or coaching — DealKaro fits like a glove.
            </p>
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {CATEGORIES.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-default"
                style={{
                  background: "#ffffff",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 2px 12px rgba(17,24,39,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-200 group-hover:bg-[#4A148C]"
                  style={{ background: "rgba(74,20,140,0.1)" }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-200 group-hover:text-white"
                    style={{ color: P }}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#111827" }}>{label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §7  NETWORK
      ══════════════════════════════════════════════════════════ */}
      <section
        id="network"
        className="py-20 lg:py-28 overflow-hidden"
        style={{ background: "#F9FBFA" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – copy */}
          <div className="flex flex-col gap-7">
            <div>
              <span
                className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: "rgba(74,20,140,0.1)", color: "#7B1FA2" }}
              >
                Network
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
                style={{ color: "#111827" }}
              >
                Grow Your Brand.{" "}
                <span style={{ color: A }}>Build Your Network.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#6b7280" }}>
                DealKaro supports multi-seller ecosystems — ideal for franchise owners,
                distributor networks, and brand aggregators. Manage every seller from
                one unified dashboard.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                { icon: "🏪", title: "Multi-seller hub", desc: "Onboard and manage unlimited sellers under your brand umbrella in minutes." },
                { icon: "📡", title: "Shared catalogue layer", desc: "Push product updates to every seller simultaneously in one click." },
                { icon: "💰", title: "Centralised revenue tracking", desc: "See GMV, orders, and payouts across your entire network in real time." },
                { icon: "🔗", title: "Referral links", desc: "Every seller gets a unique referral link to recruit new buyers and sub-sellers into your network." },
                { icon: "🤝", title: "Commission & referral handling", desc: "Define commission tiers, auto-calculate splits, and pay out referrers — all tracked without spreadsheets." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: "rgba(74,20,140,0.1)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#111827" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed mt-0.5" style={{ color: "#6b7280" }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – network visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">

              {/* Central hub */}
              <div
                className="relative z-10 w-24 h-24 rounded-3xl flex flex-col items-center justify-center text-white font-extrabold shadow-2xl text-center text-xs"
                style={{ background: `linear-gradient(135deg, ${P}, #6A1E9E)`, boxShadow: "0 12px 40px rgba(74,20,140,0.4)" }}
              >
                <span className="text-2xl mb-1">🏢</span>
                Your Brand
              </div>

              {/* Orbiting seller nodes */}
              {[
                { emoji: "🛍️", label: "Seller A", top: "6%",   left: "50%",  transform: "translateX(-50%)" },
                { emoji: "🎂", label: "Seller B", top: "28%",  right: "4%",  transform: "" },
                { emoji: "💍", label: "Seller C", bottom: "8%",right: "18%", transform: "" },
                { emoji: "👗", label: "Seller D", bottom: "8%",left: "18%",  transform: "" },
                { emoji: "🌿", label: "Seller E", top: "28%",  left: "4%",   transform: "" },
              ].map((node) => (
                <div
                  key={node.label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ top: node.top, right: node.right, bottom: node.bottom, left: node.left, transform: node.transform }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    style={{ background: "#ffffff", border: "2px solid rgba(74,20,140,0.2)" }}
                  >
                    {node.emoji}
                  </div>
                  <span className="text-[10px] font-semibold" style={{ color: "#6b7280" }}>{node.label}</span>
                </div>
              ))}

              {/* Connector lines (decorative SVG) */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
              >
                {[
                  [200, 200, 200, 36],
                  [200, 200, 370, 130],
                  [200, 200, 310, 348],
                  [200, 200, 90,  348],
                  [200, 200, 30,  130],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#4A148C"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.35"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Commission referral flow visualization */}
          <div className="lg:col-span-2 mt-4">
            <div className="rounded-3xl p-6" style={{ background: "#111827", border: "1px solid rgba(74,20,140,0.2)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-5 text-center" style={{ color: "#9ca3af" }}>
                How referral commissions work
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { step: "01", emoji: "🔗", label: "Seller A refers",     detail: "Shares unique referral link",       accent: true  },
                  { step: "02", emoji: "🛍️", label: "Seller B joins",      detail: "Signs up via referral link",         accent: false },
                  { step: "03", emoji: "📊", label: "Commission tracked",  detail: "Every order auto-calculated",       accent: true  },
                  { step: "04", emoji: "💸", label: "Paid out",            detail: "Automated payout to Seller A",      accent: false },
                ].map((item, i, arr) => (
                  <div key={item.step} className="flex items-center gap-2">
                    <div className="flex-1 flex flex-col items-center gap-2 text-center">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                        style={{
                          background: item.accent ? P : "rgba(255,255,255,0.07)",
                          border: item.accent ? "none" : "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {item.emoji}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: P }}>STEP {item.step}</p>
                        <p className="text-xs font-bold text-white leading-snug">{item.label}</p>
                        <p className="text-[10px] mt-0.5" style={{ color: "#6b7280" }}>{item.detail}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <svg className="w-5 h-5 shrink-0 mt-[-18px]" viewBox="0 0 20 20" fill="none">
                        <path d="M3 10h14M10 4l6 6-6 6" stroke="#4A148C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §8  FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        id="get-started"
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #064e32 0%, #0d7a47 45%, #111827 100%)" }}
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: P }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">

          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(74,20,140,0.2)", color: "#CE93D8" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: P }} />
            Start free · No credit card needed
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white">
            Stop losing leads in chats.
            <br />
            <span style={{ color: A }}>Start closing deals smarter.</span>
          </h2>

          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#d1fae5" }}>
            Join 2,400+ businesses already using DealKaro to automate WhatsApp sales,
            delight customers, and grow revenue — without hiring more staff.
          </p>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-2">
              {["🧑‍💼", "👩‍💼", "🧑‍🍳", "👨‍🔧", "👩‍🎨"].map((em, i) => (
                <div key={i}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-base"
                  style={{ background: "rgba(74,20,140,0.12)", borderColor: "rgba(74,20,140,0.25)" }}>
                  {em}
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold" style={{ color: "#86efac" }}>
              Join <span className="text-white font-extrabold">2,400+</span> businesses already using DealKaro
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              id="final-cta-primary"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-2xl active:scale-95"
              style={{ background: A, color: "#111827", boxShadow: "0 8px 32px rgba(74,20,140,0.35)" }}
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"
                strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact"
              id="final-cta-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm border-2 transition-all duration-200 hover:bg-white/10 active:scale-95"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "#ffffff" }}
            >
              📅 Book Demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 pt-2">
            {[
              { icon: "⚡", label: "No-code setup" },
              { icon: "🎁", label: "14-day free trial" },
              { icon: "✕",  label: "Cancel anytime" },
              { icon: "🔒", label: "GDPR compliant" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5">
                <span className="text-sm" style={{ color: P }}>{badge.icon}</span>
                <span className="text-sm font-medium" style={{ color: "#86efac" }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
