import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/lib/site-content";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  return {
    title: industry ? industry.name : "Industry Not Found",
    description: industry
      ? `${industry.name} sector support from E-Detectives.`
      : "Industry page",
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <section className="page-shell pt-12 pb-2">
        <span className="kicker">Industry Focus</span>
        <h1 className="section-title mt-4">{industry.name}</h1>
        <div className="rule-line mt-8" />
      </section>

      <section className="section-space page-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface p-7">
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Common Sector Challenges</h2>
            <ul className="mt-4 space-y-0 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              {industry.painPoints.map((item) => (
                <li key={item} className="px-4 py-3" style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface p-7">
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>How E-Detectives Helps</h2>
            <ul className="mt-4 space-y-0 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              {industry.support.map((item) => (
                <li key={item} className="px-4 py-3" style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Discuss your sector requirements
          </Link>
        </div>
      </section>
    </>
  );
}
