const trustSignals = [
  { label: "Mandate Type",    value: "Corporate & Institutional" },
  { label: "Evidence Model",  value: "Chain-of-Custody" },
  { label: "Delivery",        value: "Confidentiality-First" },
  { label: "Reporting",       value: "Executive-Ready" },
  { label: "Scope",           value: "Regional Specialist" },
  { label: "Availability",    value: "Mon–Fri, 08:00–17:00" },
];

export function LogoPlaceholderStrip() {
  return (
    <section className="page-shell pt-4 pb-0">
      <div
        className="grid gap-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        style={{ border: "1px solid var(--border)" }}
      >
        {trustSignals.map(({ label, value }, i) => (
          <div
            key={label}
            className="flex flex-col gap-1 px-5 py-4"
            style={{
              borderRight: i < trustSignals.length - 1 ? "1px solid var(--border)" : undefined,
              background: "var(--bg-subtle)",
            }}
          >
            <p className="data-label">{label}</p>
            <p
              className="text-[0.78rem] font-semibold leading-snug"
              style={{ color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

