import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights } from "@/lib/site-content";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  return {
    title: post ? post.title : "Insight Not Found",
    description: post ? post.summary : "Insight article",
  };
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-space page-shell pt-12">
      <div className="pb-2">
        <p className="data-label">{post.category}</p>
        <h1 className="section-title mt-4">{post.title}</h1>
        <p className="mt-3 data-label">Published {post.publishedAt}</p>
        <div className="rule-line mt-6" />
      </div>
      <article className="mt-8 space-y-4 text-base leading-8 max-w-3xl" style={{ color: "var(--text-body)" }}>
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}
