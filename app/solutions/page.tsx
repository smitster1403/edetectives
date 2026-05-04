import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { solutions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Solutions and Products",
  description:
    "Explore ScamDetect, IRRaaS, VIaaS, and SOC Managed Monitoring offerings from E-Detectives.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="Named offerings designed for repeatable risk response"
        summary="In addition to specialist services, E-Detectives provides solution-led offerings that enable faster deployment and consistent outcomes."
      />

      <section className="section-space page-shell">
        <div className="grid gap-0 md:grid-cols-2" style={{ border: "1px solid var(--border)" }}>
          {solutions.map((solution) => (
            <article id={solution.slug} key={solution.slug} className="card-surface tile p-6 flex flex-col" style={{ border: "1px solid var(--border)" }}>
              <h2 className="font-mono text-sm font-semibold tracking-wide" style={{ color: "var(--text-heading)" }}>{solution.name}</h2>
              <p className="mt-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase" style={{ color: "var(--accent)" }}>{solution.tagline}</p>
              <p className="mt-3 text-base leading-7 flex-1" style={{ color: "var(--text-muted)" }}>{solution.description}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="data-label">{solution.linkedService}</p>
                {solution.externalUrl && (
                  <a
                    href={solution.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost shrink-0"
                  >
                    Visit {solution.name} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
