import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MediaPlaceholder } from "@/components/media-placeholder";

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

      <section className="section-space page-shell">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]" style={{ border: "1px solid var(--border)" }}>
          <article className="card-surface tile p-7" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Mission</h2>
            <p className="mt-3 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              To help organisations uncover truth, protect digital assets, and manage
              sensitive risk matters with confidence, discretion, and professional rigor.
            </p>
            <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Vision</h2>
            <p className="mt-3 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              To be the region&apos;s most trusted specialist partner for investigations,
              digital forensics, cybersecurity, and risk-informed decision support.
            </p>
          </article>

          <article className="card-surface tile p-7" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Core Values</h2>
            <ul className="mt-4 space-y-0 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              {values.map((value) => (
                <li key={value} className="px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid gap-0 md:grid-cols-2" style={{ border: "1px solid var(--border)" }}>
          <MediaPlaceholder
            label="Leadership Portrait Placeholder"
            detail="Replace with founder or executive portrait image."
            ratio="portrait"
          />
          <MediaPlaceholder
            label="Operations Environment Placeholder"
            detail="Replace with office, forensic lab, or SOC environment image."
            ratio="portrait"
          />
        </div>
      </section>

      <section className="section-space page-shell pt-0">
        <article className="card-surface tile p-7">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Leadership Snapshot</h2>
          <p className="mt-3 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
            E-Detectives operates with a multidisciplinary model spanning investigations,
            forensic analysis, cybersecurity response, and governance support. Leadership
            profiles, credentials, and full biographies are prepared for CMS-managed
            publication during content onboarding.
          </p>
        </article>
      </section>
    </>
  );
}
