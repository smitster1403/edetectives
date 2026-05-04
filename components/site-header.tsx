"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-content";

/* ── Chevron icon ─────────────────────────────────────────────────────── */
function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      width={11}
      height={11}
      style={{
        transition: "transform 200ms ease",
        transform: open ? "rotate(180deg)" : "none",
        flexShrink: 0,
      }}
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  function toggleSubmenu(href: string) {
    setOpenSubmenu((prev) => (prev === href ? null : href));
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 w-full"
      style={{
        background: "var(--accent)",
        borderBottom: "1px solid var(--accent-mid)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.22)" : "none",
        transition: "box-shadow 250ms ease",
      }}
    >

      {/* ── Main header row ─────────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">

        {/* Brand lockup */}
        <Link
          href="/"
          className="flex items-center gap-4"
          style={{ paddingBlock: scrolled ? "0.5rem" : "0.875rem", transition: "padding 250ms ease" }}
        >
          <div
            className="inline-flex shrink-0 items-center justify-center text-[0.65rem] font-semibold tracking-wider"
            style={{
              background: "var(--teal)",
              color: "#ffffff",
              fontFamily: "var(--font-mono)",
              width: scrolled ? "1.75rem" : "2rem",
              height: scrolled ? "1.75rem" : "2rem",
              transition: "width 250ms ease, height 250ms ease",
            }}
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
            <p
              className="data-label"
              style={{
                color: "rgba(255,255,255,0.55)",
                maxHeight: scrolled ? "0" : "1.5rem",
                opacity: scrolled ? 0 : 1,
                overflow: "hidden",
                marginTop: scrolled ? 0 : "0.125rem",
                transition: "max-height 250ms ease, opacity 200ms ease, margin-top 250ms ease",
              }}
            >Corporate Risk · Intelligence · Security</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex">
          {navItems.map((item) =>
            item.children ? (
              /* ── Dropdown nav item ──────────────────────────────── */
              <div key={item.href} className="group relative">
                {/* Clicking the label navigates to /services; hovering shows the dropdown */}
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 border-r px-5 text-[0.75rem] font-semibold hover:bg-white/10"
                  style={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: isActive(item.href) ? "#ffffff" : "rgba(255,255,255,0.8)",
                    boxShadow: isActive(item.href) ? "inset 0 -2px 0 var(--teal)" : "none",
                    paddingBlock: scrolled ? "0.5rem" : "0.875rem",
                    transition: "padding 250ms ease, background 140ms ease, color 140ms ease",
                  }}
                >
                  {item.label}
                </Link>

                {/* Dropdown panel — flush to nav bottom, seamless */}
                <div
                  className="pointer-events-none invisible absolute top-full z-[200] translate-y-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    minWidth: "17rem",
                    maxWidth: "24rem",
                    ...(item.dropdownAlign === "right" ? { right: 0 } : { left: 0 }),
                  }}
                >
                  {/* Panel */}
                  <div
                    style={{
                      background: "#ffffff",
                      borderTop: "2px solid var(--teal)",
                      borderLeft: "1px solid var(--border)",
                      borderRight: "1px solid var(--border)",
                      borderBottom: "1px solid var(--border)",
                      boxShadow: "0 12px 32px rgba(30,46,61,0.14)",
                      overflow: "hidden",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-3 text-[0.82rem] font-medium transition hover:bg-[var(--accent-soft)]"
                        style={{ color: "var(--text-heading)", borderBottom: "1px solid var(--border)" }}
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0"
                          style={{ background: "var(--teal)" }}
                        />
                        <span className="truncate">{child.label}</span>
                      </Link>
                    ))}
                    {/* Footer: View All */}
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition hover:bg-[var(--teal-soft)]"
                      style={{
                        color: "var(--teal)",
                        fontFamily: "var(--font-mono)",
                        background: "var(--accent-soft)",
                      }}
                    >
                      View All {item.label}
                      <span aria-hidden="true" className="text-base leading-none">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* ── Regular nav link ───────────────────────────────── */
              <Link
                key={item.href}
                href={item.href}
                className="border-r px-5 text-[0.75rem] font-semibold hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: isActive(item.href) ? "#ffffff" : "rgba(255,255,255,0.8)",
                  boxShadow: isActive(item.href) ? "inset 0 -2px 0 var(--teal)" : "none",
                  paddingBlock: scrolled ? "0.5rem" : "0.875rem",
                  transition: "padding 250ms ease, background 140ms ease, color 140ms ease",
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger toggle — mobile only */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] shrink-0 transition-colors hover:bg-white/10"
        >
          <span
            className="block h-[1.5px] w-5 bg-white transition-all duration-300"
            style={{ transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-[1.5px] w-5 bg-white transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-[1.5px] w-5 bg-white transition-all duration-300"
            style={{ transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "90vh" : "0px",
          borderTop: mobileOpen ? "1px solid rgba(255,255,255,0.12)" : "none",
          overflowY: mobileOpen ? "auto" : "hidden",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col"
          style={{ background: "rgba(0,0,0,0.18)" }}
        >
          {navItems.map((item) =>
            item.children ? (
              /* ── Accordion item ──────────────────────────────── */
              <div key={item.href}>
                {/* Row: label + chevron toggle */}
                <div
                  className="flex items-stretch"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Link
                    href={item.href}
                    className="flex-1 px-6 py-4 text-sm font-semibold"
                    style={{
                      color: isActive(item.href) ? "#ffffff" : "rgba(255,255,255,0.85)",
                      borderLeft: isActive(item.href) ? "2px solid var(--teal)" : "2px solid transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleSubmenu(item.href)}
                    aria-expanded={openSubmenu === item.href}
                    aria-label={`Toggle ${item.label} submenu`}
                    className="flex items-center justify-center px-4 transition hover:bg-white/10"
                    style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}
                  >
                    <ChevronIcon open={openSubmenu === item.href} />
                  </button>
                </div>

                {/* Sub-items */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openSubmenu === item.href ? "60vh" : "0px",
                    background: "rgba(0,0,0,0.12)",
                    overflowY: openSubmenu === item.href ? "auto" : "hidden",
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-3 py-3.5 pl-10 pr-6 text-sm font-medium transition hover:bg-white/10"
                      style={{
                        color: "rgba(255,255,255,0.72)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <span
                        className="h-1 w-1 shrink-0"
                        style={{ background: "var(--teal)" }}
                      />
                      {child.label}
                    </Link>
                  ))}
                  {/* View All row */}
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3.5 pl-10 pr-6 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition hover:bg-white/10"
                    style={{
                      color: "var(--teal)",
                      fontFamily: "var(--font-mono)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    View All {item.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ) : (
              /* ── Regular mobile link ────────────────────────────── */
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
                style={{
                  color: isActive(item.href) ? "#ffffff" : "rgba(255,255,255,0.85)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: isActive(item.href) ? "2px solid var(--teal)" : "2px solid transparent",
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

