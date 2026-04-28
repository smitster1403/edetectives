import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Case Studies and Experience",
  description:
    "Anonymised case experience showing challenge, role, work performed, and outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        kicker="Case Studies"
        title="Anonymised experience across investigations and cyber risk response"
        summary="Each case summary highlights challenge, our role, work performed, and measurable outcomes while protecting client confidentiality."
      />

      <section className="section-space page-shell">
        <div className="grid gap-0" style={{ border: "1px solid var(--border)" }}>
          {caseStudies.map((study) => (
            <article key={study.slug} className="card-surface tile p-7" style={{ border: "1px solid var(--border)" }}>
              <h2 className="text-base font-bold" style={{ color: "var(--text-heading)" }}>{study.title}</h2>
              <div className="mt-5 space-y-0 text-base leading-7">
                {[
                  { label: "Challenge", value: study.challenge },
                  { label: "Our Role", value: study.role },
                  { label: "Work Performed", value: study.workPerformed },
                  { label: "Outcome", value: study.outcome },
                ].map(({ label, value }) => (
                  <div key={label} className="grid grid-cols-[6rem_1fr] sm:grid-cols-[8rem_1fr] gap-3 py-2.5" style={{ borderBottom: "1px solid var(--border)" }}>
                    <dt className="data-label pt-0.5">{label}</dt>
                    <dd className="text-sm" style={{ color: "var(--text-muted)" }}>{value}</dd>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.serviceTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono text-[0.58rem] tracking-widest uppercase"
                    style={{ border: "1px solid var(--border)", color: "var(--accent)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
