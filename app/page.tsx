import Link from "next/link";
import { contact, industries, jurisdictions, services, solutions } from "@/lib/site-content";

const capabilityCodes = ["INV", "FOR", "CYB", "INC", "SOC", "VET", "DAT", "TRN"];

export default function Home() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background_video_1.mp4" type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(20,34,48,0.92) 0%, rgba(26,46,66,0.72) 60%, rgba(26,46,66,0.55) 100%)",
          }}
        />

        {/* Content */}
        <div className="page-shell section-space relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" style={{ minHeight: "38vh", borderBottom: "1px solid rgba(255,255,255,0.13)", paddingBottom: "2.5rem" }}>
            {/* Left — main copy */}
            <div className="flex-1 min-w-0">
              <span
                className="kicker mb-4 block"
                style={{ color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.2)" }}
              >
                Corporate Risk & Intelligence · Southern Africa
              </span>
              <h1
                className="section-title headline-balance mt-2 mb-6 max-w-2xl"
                style={{ color: "#fff", fontWeight: 700 }}
              >
                Corporate Investigations, Digital Forensics & Cybersecurity for High-Stakes Environments
              </h1>
              <p className="max-w-lg text-base md:text-lg leading-8 text-white/80 mb-8">
                Trusted by institutions and leadership teams for expert corporate investigations, digital forensics, and cybersecurity services. We deliver evidence-led outcomes when the stakes are highest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">
                  Request Consultation
                </Link>
                <a
                  href={contact.whatsappHref}
                  className="btn-outline btn-outline-light"
                >
                  WhatsApp an Expert
                </a>
              </div>
            </div>
            {/* Right — capability index */}
            <div className="hidden lg:flex flex-col border-l border-white/15 pl-8 min-w-[260px] max-w-[320px]">
              <p className="data-label mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                Capability Index
              </p>
              {services.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-3 py-2 px-2 -mx-2 transition-all duration-200 hover:bg-white/10"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span
                    className="shrink-0 w-9 font-mono text-[0.58rem] font-semibold tracking-widest transition-colors duration-200 group-hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {capabilityCodes[i]}
                  </span>
                  <span
                    className="flex-1 text-[0.8rem] font-medium leading-snug text-white/75 transition-colors duration-200 group-hover:text-white truncate"
                  >
                    {service.title}
                  </span>
                  <span
                    className="shrink-0 text-[0.65rem] font-mono opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ────────────────────────────────────────────── */}
      <section className="page-shell pb-0">
        <div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)]"
          style={{ border: "1px solid var(--border)" }}
        >
          {[
            { value: "08", label: "Core Services" },
            { value: "04", label: "Named Solutions" },
            { value: "06+", label: "Industry Sectors" },
            { value: "15", label: "Active Jurisdictions" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="tile px-5 py-5 md:px-7"
            >
              <p
                className="font-mono text-2xl font-semibold tracking-tight"
                style={{ color: "var(--text-heading)" }}
              >
                {value}
              </p>
              <p className="data-label mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FIRM PROFILE ─────────────────────────────────────────────── */}
      <section className="subtle-band section-space">
        <div className="page-shell">
          <div className="grid gap-8 lg:gap-14 lg:grid-cols-[1fr_380px]">

            {/* Left — narrative */}
            <div>
              <span className="kicker">Firm Profile</span>
              <h2 className="section-title mt-4 max-w-lg">
                A trusted partner for sensitive corporate and institutional matters
              </h2>
              <p className="mt-5 text-base leading-8" style={{ color: "var(--text-body)" }}>
                E-Detectives is a Botswana-based specialist firm supporting organisations
                with corporate investigations, digital forensics, cybersecurity, incident
                response, security operations, verification, and compliance priorities.
                We combine investigative discipline with technology expertise to deliver
                clarity in high-risk situations.
              </p>
              <p className="mt-4 text-base leading-8" style={{ color: "var(--text-muted)" }}>
                Our operating model is built around controlled information handling,
                evidence integrity, and executive-ready outputs — enabling clients to act
                decisively in complex, time-sensitive environments.
              </p>
            </div>

            {/* Right — firm parameters */}
            {/* <div>
              <p className="data-label mb-4">Firm Parameters</p>
              {[
                { label: "Primary Base",     value: "Gaborone, Botswana" },
                { label: "Operating Region", value: "SADC Region & Uganda" },
                { label: "Jurisdictions",    value: "15 Active Countries" },
                { label: "Specialisation",   value: "Risk & Investigation" },
                { label: "Operating Model",  value: "Confidentiality-First" },
                { label: "Output Standard",  value: "Evidence-Led, Auditable" },
                { label: "Client Category",  value: "Corporate & Institutional" },
              ].map(({ label, value }) => (
                <div key={label} className="data-row">
                  <dt className="data-label">{label}</dt>
                  <dd className="text-sm font-semibold" style={{ color: "var(--text-heading)" }}>
                    {value}
                  </dd>
                </div>
              ))}
            </div> */}

          </div>
        </div>
      </section>

      {/* ── OPERATING JURISDICTIONS ──────────────────────────────────── */}
      <section className="page-shell section-space">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="kicker">Operating Jurisdictions</span>
            <h2 className="section-title mt-3">Serving clients across Africa</h2>
          </div>
          {/* <p className="text-sm max-w-sm text-right hidden md:block" style={{ color: "var(--text-muted)" }}>
            Active across 15 countries. Excludes Malawi and Mozambique.
            Primary base: Gaborone, Botswana.
          </p> */}
        </div>
        <div className="rule-line" />

        {/* Conveyor belt — duplicated list creates seamless loop */}
        <div
          className="marquee-root mt-6 overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "1.5rem",
              width: "max-content",
              animation: "marquee 40s linear infinite",
            }}
          >
            {[...jurisdictions, ...jurisdictions].map((j, i) => (
              <div
                key={`${j.code}-${i}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "5.5rem",
                  flexShrink: 0,
                }}
              >
                <div style={{ width: "100%", aspectRatio: "3/2", border: "1px solid var(--border)", overflow: "hidden" }}>
                  <img
                    src={`/flags/${j.code.toLowerCase()}.svg`}
                    alt={`${j.name} flag`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.125rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.3 }}>
                    {j.name}
                  </span>
                  {j.primary && (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)" }}>
                      Base
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY COVERAGE ────────────────────────────────────────── */}
      <section className="page-shell section-space">
        <div className="flex items-baseline justify-between gap-8">
          <div>
            <span className="kicker">Coverage</span>
            <h2 className="section-title mt-3">Industry sectors served</h2>
          </div>
          <Link
            href="/industries"
            className="hidden shrink-0 btn-ghost md:inline-flex"
          >
            All Sectors →
          </Link>
        </div>

        <div className="rule-line mt-8" />
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {industries.map((industry, i) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center justify-between px-2 py-4 transition hover:bg-[var(--teal-soft)]"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-5">
                <span
                  className="w-8 shrink-0 font-mono text-[0.58rem] font-medium"
                  style={{ color: "var(--text-faint)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-body)" }}
                >
                  {industry.name}
                </span>
              </div>
              <span
                className="font-mono text-xs transition"
                style={{ color: "var(--border-strong)" }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SOLUTION PRODUCTS ────────────────────────────────────────── */}
      <section className="subtle-band section-space">
        <div className="page-shell">
          <span className="kicker">Solution Products</span>
          <h2 className="section-title mt-3">Structured delivery frameworks for recurring risk</h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <article key={solution.slug} className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-sm font-semibold tracking-wide" style={{ color: "var(--text-heading)" }}>
                    {solution.name}
                  </h3>
                  <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                    {solution.linkedService.split(" ")[0]}
                  </span>
                </div>
                <p className="font-mono text-[0.68rem] tracking-[0.1em] uppercase" style={{ color: "var(--teal)" }}>
                  {solution.tagline}
                </p>
                <p className="text-base leading-7" style={{ color: "var(--text-muted)" }}>
                  {solution.description}
                </p>
                {solution.externalUrl && (
                  <a
                    href={solution.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost self-start"
                  >
                    Visit {solution.name} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT PROTOCOL ──────────────────────────────────────── */}
      <section className="page-shell section-space">
        <span className="kicker">Engagement Protocol</span>
        <h2 className="section-title mt-3">Structured, discreet, and evidence-led</h2>

        <div className="rule-line mt-8" />
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          {[
            {
              step: "01",
              heading: "Intake & Scoping",
              body: "Confidential consultation to define scope, objectives, and required discretion level. Clear mandates and jurisdictional constraints established upfront.",
            },
            {
              step: "02",
              heading: "Investigation & Analysis",
              body: "Technical and investigative work with controlled evidence handling and chain-of-custody discipline. Methodologies aligned to legal defensibility standards.",
            },
            {
              step: "03",
              heading: "Findings & Action Support",
              body: "Executive-ready reporting with clear recommendations tailored to legal, operational, or compliance needs. Supported handoff to counsel, compliance, or leadership.",
            },
          ].map(({ step, heading, body }) => (
            <div
              key={step}
              className="grid grid-cols-[3rem_1fr] gap-6 px-2 py-8 transition hover:bg-[var(--teal-soft)]"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span
                className="font-mono text-3xl font-semibold leading-none"
                style={{ color: "var(--teal)" }}
              >
                {step}
              </span>
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--text-heading)" }}
                >
                  {heading}
                </h3>
                <p
                  className="mt-2 text-base leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
          <a href={contact.phoneHref} className="btn-outline">
            Call {contact.phoneDisplay}
          </a>
        </div>
      </section>

    </div>
  );
}
