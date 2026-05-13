import Link from "next/link";

const FOOTER_COLS = [
  {
    heading: "Product",
    links: [
      { label: "Features",   href: "/#features"    },
      { label: "Pricing",    href: "/pricing"       },
      { label: "Use Cases",  href: "/use-cases"     },
      { label: "Changelog",  href: "/#changelog"    },
      { label: "Roadmap",    href: "/ai-brain#roadmap" },
    ],
  },
  {
    heading: "AI Brain",
    links: [
      { label: "Smart Replies",      href: "/ai-brain"           },
      { label: "Catalogue AI",       href: "/ai-brain#copywriter"},
      { label: "Customer Insights",  href: "/ai-brain"           },
      { label: "Hinglish Support",   href: "/ai-brain#hinglish"  },
      { label: "Integrations",       href: "/ai-brain#roadmap"   },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",   href: "/about"    },
      { label: "Blog",       href: "/#blog"    },
      { label: "Careers",    href: "/about"    },
      { label: "Partners",   href: "/about"    },
      { label: "Contact",    href: "/contact"  },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",  href: "/privacy"  },
      { label: "Terms of Service",href: "/terms"    },
      { label: "Cookie Policy",   href: "/cookies"  },
      { label: "Refund Policy",   href: "/refund"   },
      { label: "Security",        href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer style={{ background: "#111827", color: "#e5e7eb" }}>
        {/* Top section – columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#9ca3af" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-[#4A148C]"
                      style={{ color: "#d1d5db" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        />

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight" style={{ color: "#FFD700" }}>
                DealKaro
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: "rgba(74,20,140,0.2)", color: "#CE93D8" }}
              >
                by Kleem
              </span>
            </div>
            <span className="text-[11px]" style={{ color: "#4b5563" }}>
              A product of Kleem Technologies Pvt. Ltd.
            </span>
          </div>

          <p className="text-xs" style={{ color: "#6b7280" }}>
            © {new Date().getFullYear()} Kleem Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── WhatsApp Floating Button ─────────────────────────────── */}
      <a
        id="whatsapp-float"
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
