import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space page-shell pt-14">
      <div className="card-surface px-8 py-12 text-center md:px-12">
        <span className="kicker">404</span>
        <h1 className="section-title mt-4">Page not found</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7" style={{ color: "var(--text-muted)" }}>
          The page you requested is unavailable or may have moved. Use the links below
          to continue securely.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/contact" className="btn-outline">Contact E-Detectives</Link>
        </div>
      </div>
    </section>
  );
}
