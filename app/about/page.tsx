import type { Metadata } from "next";
import Image from "next/image";
import teamImg from "../../public/edetectives_team.jpeg";
import { PageHero } from "@/components/page-hero";
import { LeaderCards } from "@/components/leader-cards";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about E-Detectives, our mission, values, and leadership approach to sensitive investigations and cybersecurity support.",
};

const values = [
  "Confidentiality in every engagement",
  "Evidence-first analysis and reporting",
  "Professional conduct under pressure",
  "Clarity for executive decision-making",
  "Structured, accountable delivery",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About E-Detectives"
        title="Professional, discreet support for organisations facing complex risk"
        summary="E-Detectives is a Botswana-based specialist partner for corporate investigations, digital forensics, cybersecurity, and compliance-facing support. We combine investigative discipline with technical capability so clients can act on trusted facts."
      />

      {/* Mission & Values */}
      <section className="section-space page-shell">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]" style={{ border: "1px solid var(--border)" }}>
          <article className="card-surface tile p-7" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Mission</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              To help organisations uncover truth, protect digital assets, and manage
              sensitive risk matters with confidence, discretion, and professional rigor.
            </p>
            <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Vision</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              To be the region&apos;s most trusted specialist partner for investigations,
              digital forensics, cybersecurity, and risk-informed decision support.
            </p>
          </article>

          <article className="card-surface tile p-7" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Core Values</h2>
            <ul className="mt-4 space-y-0 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              {values.map((value) => (
                <li key={value} className="px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className="rule-line" />

      {/* Company Leadership */}
      <section className="section-space page-shell">
        <h2 className="text-xl font-semibold mb-8 text-center" style={{ color: "var(--text-heading)" }}>Company Leadership</h2>
        <LeaderCards />
      </section>

      {/* Divider */}
      <div className="rule-line" />

      {/* The Team */}
      <section className="section-space page-shell">
        <h2 className="text-xl font-semibold mb-8 text-center" style={{ color: "var(--text-heading)" }}>The Team</h2>
        <div className="flex justify-center">
          <Image
            src={teamImg}
            alt="The E-Detectives team"
            style={{ maxHeight: "60vh", width: "auto" }}
            priority
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold leading-snug" style={{ color: "var(--text-heading)" }}>
            One team. Unwavering standards.
          </p>
          <p className="mt-3 text-sm leading-7 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Every investigation, every engagement, every finding — delivered with the discretion,
            rigour, and accountability that institutions depend on. We do not cut corners.
            We follow the evidence.
          </p>
        </div>
      </section>
    </>
  );
}
