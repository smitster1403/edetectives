import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services Overview",
  description:
    "Explore E-Detectives service lines: investigations, digital forensics, cybersecurity, incident response, SOC support, due diligence, compliance, and training.",
};

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Integrated service lines for investigations, technology, and risk"
        summary="Our services are structured to support organisations with sensitive matters requiring credibility, discretion, and evidence-driven outcomes."
      />

      <section className="section-space page-shell">
        <div className="grid gap-0 md:grid-cols-2" style={{ border: "1px solid var(--border)" }}>
          {services.map((service) => (
            <article key={service.slug} className="card-surface tile p-6" style={{ border: "1px solid var(--border)" }}>
              <h2 className="text-base font-bold" style={{ color: "var(--text-heading)" }}>{service.title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{service.short}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 btn-ghost"
              >
                View Service →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
