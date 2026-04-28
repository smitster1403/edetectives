"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40" style={{ background: "var(--accent)", borderBottom: "1px solid var(--accent-mid)" }}>

      {/* ── Main header row ─────────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">

        {/* Brand lockup */}
        <Link href="/" className="flex items-center gap-4 py-3.5">
          <div
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[0.65rem] font-semibold tracking-wider"
            style={{ background: "var(--teal)", color: "#ffffff", fontFamily: "var(--font-mono)" }}
            aria-label="E-Detectives logo"
          >
            E/D
          </div>
          <div>
            <p
              className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              E-Detectives
            </p>
            <p className="data-label mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>Corporate Risk · Intelligence · Security</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-r px-5 py-3.5 text-[0.75rem] font-semibold transition hover:bg-white/10"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger toggle — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] shrink-0 rounded-sm transition-colors hover:bg-white/10"
        >
          <span
            className="block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300"
            style={{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300"
            style={{ transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "600px" : "0px",
          borderTop: open ? "1px solid rgba(255,255,255,0.12)" : "none",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col"
          style={{ background: "rgba(0,0,0,0.18)" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
              style={{
                color: "rgba(255,255,255,0.85)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
