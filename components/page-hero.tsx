type PageHeroProps = {
  kicker: string;
  title: string;
  summary: string;
};

export function PageHero({ kicker, title, summary }: PageHeroProps) {
  return (
    <section className="page-shell pt-12 pb-0">

      {/* Breadcrumb */}
      <div className="flex items-center gap-4 pb-8">
        <span className="data-label">E-Detectives</span>
        <span className="data-label" style={{ color: "var(--border-strong)" }}>/</span>
        <span className="data-label" style={{ color: "var(--teal)" }}>{kicker}</span>
      </div>

      <h1 className="section-title headline-balance max-w-4xl">{title}</h1>
      <p
        className="mt-5 max-w-3xl text-base leading-8"
        style={{ color: "var(--text-muted)" }}
      >
        {summary}
      </p>

      <div className="rule-line mt-8" />
    </section>
  );
}

