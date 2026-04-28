import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/site-content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-shell pt-12 pb-2">
        <span className="kicker">Service Detail</span>
        <h1 className="section-title mt-4">{service.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8" style={{ color: "var(--text-muted)" }}>{service.intro}</p>
        <div className="rule-line mt-8" />
      </section>

      <section className="section-space page-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface p-7">
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Typical Deliverables</h2>
            <ul className="mt-4 space-y-2 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              {service.deliverables.map((item) => (
                <li key={item} className="px-4 py-2.5" style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface p-7">
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Business Outcomes</h2>
            <ul className="mt-4 space-y-2 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              {service.outcomes.map((item) => (
                <li key={item} className="px-4 py-2.5" style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="subtle-band mt-8 px-7 py-8">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Need structured support on a sensitive matter?</h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request Consultation
            </Link>
            <Link href="/services" className="btn-outline">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
