import Link from "next/link";
import Image from "next/image";
import { contact, navItems } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer
      className="mt-8"
      style={{ borderTop: "1px solid var(--accent-mid)", background: "var(--accent)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16">

        {/* Top grid */}
        <div
          className="grid md:grid-cols-3"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >

          {/* Brand */}
          <div className="p-8" style={{ borderRight: "1px solid rgba(255,255,255,0.15)" }}>
            <Image
              src="/ED logo transparent.png"
              alt="E-Detectives"
              width={140}
              height={70}
              style={{ height: "3rem", width: "auto" }}
            />
            <p className="mt-5 text-base leading-7" style={{ color: "rgba(255,255,255,0.65)" }}>
              Discreet, evidence-driven investigations, intelligence gathering,
              digital forensics, cybersecurity, and security operations support
              for organisations managing sensitive risk.
            </p>
            <p className="mt-5 data-label" style={{ color: "rgba(255,255,255,0.45)" }}>Botswana Specialist Support</p>
          </div>

          {/* Nav */}
          <div className="p-8" style={{ borderRight: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="data-label" style={{ color: "rgba(255,255,255,0.5)" }}>Pages</p>
            <ul className="mt-4 grid grid-cols-2 gap-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-0 py-2.5 text-sm font-medium transition hover:text-white"
                    style={{ color: "rgba(255,255,255,0.7)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="p-8">
            <p className="data-label" style={{ color: "rgba(255,255,255,0.5)" }}>Confidential Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={contact.phoneHref}
                  className="transition"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  className="transition"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  WhatsApp {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {contact.email}
                </a>
              </li>
              <li className="data-label pt-2" style={{ color: "rgba(255,255,255,0.45)" }}>{contact.address}</li>
              <li className="data-label" style={{ color: "rgba(255,255,255,0.45)" }}>{contact.businessHours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 px-8 py-4 text-[0.65rem] sm:flex-row"
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.12em",
          }}
        >
          <span>© {new Date().getFullYear()} E-Detectives. All rights reserved.</span>
          <span className="uppercase tracking-widest">Confidential by Design</span>
        </div>
      </div>
    </footer>
  );
}

