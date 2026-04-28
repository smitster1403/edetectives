import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "See how E-Detectives supports banking, insurance, mining, government, legal, and SME environments.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Sector-aware support for complex operating environments"
        summary="Our work is tailored to institutional context, governance requirements, and operational realities across key industries."
      />

      <section className="section-space page-shell">
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3" style={{ border: "1px solid var(--border)" }}>
          {industries.map((industry) => (
            <article key={industry.slug} className="card-surface tile p-6" style={{ border: "1px solid var(--border)" }}>
              <h2 className="text-base font-bold" style={{ color: "var(--text-heading)" }}>{industry.name}</h2>
              <p className="mt-3 text-sm leading-7" style={{ color: "var(--text-muted)" }}>Focused risk and assurance support.</p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-4 inline-block font-mono text-[0.65rem] tracking-[0.12em] uppercase transition"
                style={{ color: "var(--teal)" }}
              >
                View Sector →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
