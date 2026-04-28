import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read E-Detectives insights on investigations, digital forensics, incident response, and compliance.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Practical perspectives on fraud, cyber risk, and compliance"
        summary="Our insights help leadership and risk teams turn complex security and investigation topics into clear action."
      />

      <section className="section-space page-shell">
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3" style={{ border: "1px solid var(--border)" }}>
          {insights.map((post) => (
            <article key={post.slug} className="card-surface tile flex flex-col p-6" style={{ border: "1px solid var(--border)" }}>
              <p className="data-label">{post.category}</p>
              <h2 className="mt-3 text-base font-bold" style={{ color: "var(--text-heading)" }}>{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7" style={{ color: "var(--text-muted)" }}>{post.summary}</p>
              <Link
                href={`/insights/${post.slug}`}
                className="mt-4 inline-block font-mono text-[0.65rem] tracking-[0.12em] uppercase transition"
                style={{ color: "var(--teal)" }}
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
