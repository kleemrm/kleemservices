"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y" style={{ borderColor: "#f3f4f6" }}>
      {faqs.map((faq, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx}>
            <button
              id={`faq-${idx}`}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left font-semibold text-sm transition-colors hover:text-[#4A148C]"
              style={{ color: isOpen ? "#4A148C" : "#111827" }}
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-transform duration-200"
                style={{
                  background: isOpen ? "#4A148C" : "rgba(74,20,140,0.1)",
                  color: isOpen ? "#fff" : "#4A148C",
                  transform: isOpen ? "rotate(45deg)" : "none",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
