import Link from "next/link";
import { contact, industries, services, solutions } from "@/lib/site-content";

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

        {/* Dark overlay — brand-tinted gradient for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,34,48,0.88) 0%, rgba(26,46,66,0.72) 60%, rgba(26,46,66,0.55) 100%)",
          }}
        />

        {/* Content */}
        <div className="page-shell section-space relative z-10">
          <div
            className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2.5rem" }}
          >
            {/* Left — mandate block */}
            <div>
              <span
                className="kicker"
                style={{ color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.2)" }}
              >
                Corporate Risk &amp; Intelligence · Botswana
              </span>

              <h1
                className="section-title headline-balance mt-5 max-w-xl"
                style={{ color: "#fff" }}
              >
                Discreet Investigations and Cyber Defence for High-Stakes Environments
              </h1>

              <div
                className="rule-line mt-8 mb-6"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
            <div
              className="flex flex-col lg:border-l"
              style={{ borderColor: "rgba(255,255,255,0.15)", paddingLeft: undefined }}
            >
              <div className="lg:pl-6">
                <p
                  className="data-label mb-4"
                  style={{ color: "var(--teal)" }}
                >
                  Capability Index
                </p>
                {services.map((service, i) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-3 py-2.5 px-2 -mx-2 rounded-sm transition-all duration-200 hover:bg-white/10"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <span
                      className="shrink-0 w-9 font-mono text-[0.58rem] font-semibold tracking-widest transition-colors duration-200 group-hover:text-white"
                      style={{ color: "var(--teal)" }}
                    >
                      {capabilityCodes[i]}
                    </span>
                    <span
                      className="flex-1 text-[0.8rem] font-medium leading-snug text-white/75 transition-colors duration-200 group-hover:text-white"
                    >
                      {service.title}
                    </span>
                    <span
                      className="shrink-0 text-[0.65rem] font-mono opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: "var(--teal)" }}
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
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
            { value: "BOTSWANA", label: "Primary Jurisdiction" },
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
            <div>
              <p className="data-label mb-4">Firm Parameters</p>
              {[
                { label: "Primary Base",     value: "Gaborone, Botswana" },
                { label: "Operating Region", value: "Sub-Saharan Africa" },
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
            </div>
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
            className="hidden shrink-0 font-mono text-[0.66rem] tracking-[0.14em] uppercase transition md:block"
            style={{ color: "var(--teal)" }}
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
                <p className="text-sm leading-7" style={{ color: "var(--text-muted)" }}>
                  {solution.description}
                </p>
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
                  className="mt-2 text-sm leading-7"
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
