"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features",  href: "/#features"   },
  { label: "Pricing",   href: "/pricing"      },
  { label: "Use Cases", href: "/use-cases"    },
  { label: "AI Brain",  href: "/ai-brain"     },
  { label: "About",     href: "/about"        },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Main Nav Bar ──────────────────────────────────────────── */}
      <header className="glass fixed top-0 inset-x-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none select-none shrink-0">
            <span
              className="text-xl font-black tracking-tight"
              style={{ color: "#FFD700" }}
            >
              DealKaro
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase"
              style={{ color: "#6b7280" }}>
              powered by Kleem
            </span>
          </Link>

          {/* Desktop center links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:text-[#4A148C]"
                  style={{ color: "#374151" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
              style={{ background: "#FFD700", color: "#111827" }}
            >
              Start Selling
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" style={{ color: "#111827" }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: "#111827" }} />
            )}
          </button>
        </nav>

        {/* ── Mobile dropdown ─────────────────────────────────────── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-black/5">
            <ul className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-[#4A148C]/10 hover:text-[#4A148C]"
                    style={{ color: "#374151" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: "#FFD700", color: "#111827" }}
                >
                  Start Selling
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Push page content below the fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
