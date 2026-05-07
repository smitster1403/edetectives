import type { Metadata } from "next";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact E-Detectives for a confidential consultation via form, WhatsApp, or phone.",
};

type ContactPageProps = {
  searchParams: Promise<{ status?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { status } = await searchParams;

  const statusMessage =
    status === "success"
      ? "Your confidential enquiry was submitted successfully. Our team will contact you shortly."
      : status === "missing"
        ? "Please complete all required fields before submitting your enquiry."
        : status === "email"
          ? "Please provide a valid email address."
          : "";

  return (
    <>
      <section className="page-hero page-shell pt-12 pb-2">
        <span className="kicker">Contact</span>
        <h1 className="section-title mt-4">Request a confidential consultation</h1>
        <p className="mt-4 max-w-3xl text-base leading-8" style={{ color: "var(--text-muted)" }}>
          Share your requirements securely. Our team will respond with discretion and
          a structured next-step recommendation.
        </p>
        {statusMessage && (
          <p
            className="mt-4 px-4 py-3 text-sm"
            style={{ border: "1px solid var(--border)", background: "var(--bg-subtle)", color: "var(--text-body)" }}
          >
            {statusMessage}
          </p>
        )}
        <div className="rule-line mt-8" />
      </section>

      <section className="section-space page-shell">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <form action="/api/contact" method="post" className="card-surface p-7">
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Secure Enquiry Form</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                Full Name
                <input
                  name="name"
                  required
                  className="mt-1 w-full px-3 py-2 text-sm bg-transparent"
                  style={{ border: "1px solid var(--border)", color: "var(--text-body)" }}
                />
              </label>
              <label className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                Organisation
                <input
                  name="organisation"
                  required
                  className="mt-1 w-full px-3 py-2 text-sm bg-transparent"
                  style={{ border: "1px solid var(--border)", color: "var(--text-body)" }}
                />
              </label>
              <label className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                Work Email
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full px-3 py-2 text-sm bg-transparent"
                  style={{ border: "1px solid var(--border)", color: "var(--text-body)" }}
                />
              </label>
              <label className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                Phone Number
                <input
                  name="phone"
                  className="mt-1 w-full px-3 py-2 text-sm bg-transparent"
                  style={{ border: "1px solid var(--border)", color: "var(--text-body)" }}
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium" style={{ color: "var(--text-body)" }}>
              Service of Interest
              <select
                name="service"
                className="mt-1 w-full px-3 py-2 text-sm bg-transparent"
                style={{ border: "1px solid var(--border)", color: "var(--text-body)" }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service line
                </option>
                <option>Corporate Investigations</option>
                <option>Digital Forensics</option>
                <option>Cybersecurity Services</option>
                <option>Incident Response & Recovery</option>
                <option>Security Operations Centre (SOC)</option>
                <option>Vetting, Verification & Due Diligence</option>
                <option>Data Protection & Compliance Support</option>
                <option>Training & Awareness</option>
              </select>
            </label>

            <label className="mt-4 block text-sm font-medium" style={{ color: "var(--text-body)" }}>
              Brief Description
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1 w-full px-3 py-2 text-sm bg-transparent"
                style={{ border: "1px solid var(--border)", color: "var(--text-body)" }}
              />
            </label>

            <button type="submit" className="btn-primary mt-6">
              Submit
            </button>
          </form>

          <aside className="card-surface p-7">
            <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Direct Contact</h2>
            <ul className="mt-5 space-y-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              <li>
                Phone: <a href={contact.phoneHref} style={{ color: "var(--teal)" }}>{contact.phoneDisplay}</a>
              </li>
              <li>
                WhatsApp: <a href={contact.whatsappHref} style={{ color: "var(--teal)" }}>{contact.whatsappDisplay}</a>
              </li>
              <li>
                Email: <a href={`mailto:${contact.email}`} style={{ color: "var(--teal)" }}>{contact.email}</a>
              </li>
              <li>Address: {contact.address}</li>
              <li>Hours: {contact.businessHours}</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
