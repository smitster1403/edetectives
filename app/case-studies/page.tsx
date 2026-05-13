import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Selected investigations, forensic, cybersecurity, and training engagements delivered by E-Detectives across Botswana's public and private sectors.",
};

const clients = [
  { name: "Debswana", sector: "Mining & Resources" },
  { name: "Public Procurement Regulatory Authority (PPRA)", sector: "Government / Regulatory" },
  { name: "Botswana Energy Regulatory Authority (BERA)", sector: "Government / Regulatory" },
  { name: "Botswana Savings Bank (BSB)", sector: "Financial Services" },
  { name: "Botho University", sector: "Education" },
  { name: "BOCRA / National CSIRT", sector: "Government / Regulatory" },
  { name: "Directorate of Intelligence and Security Services (DISS)", sector: "Security & Defence" },
  { name: "Minerals Development Company Botswana (MDCB)", sector: "Mining & Resources" },
  { name: "Human Resource Development Council (HRDC)", sector: "Government / Regulatory" },
  { name: "Botswana Qualifications Authority (BQA)", sector: "Government / Regulatory" },
  { name: "Botswana Power Corporation (BPC)", sector: "Energy & Utilities" },
  { name: "Motor Vehicle Accident Fund (MVA Fund)", sector: "Financial Services" },
  { name: "Botswana Defence Force (BDF)", sector: "Security & Defence" },
];

type WorkItem = {
  category: string;
  items: string[];
};

const work: WorkItem[] = [
  {
    category: "Corporate Investigations & Fraud",
    items: [
      "Supplier vetting and anti-fronting investigation for a major mining conglomerate.",
      "Integrity investigation initiated following a cyber incident at a government procurement authority.",
      "Fraud investigation, staff training, and digital forensics support for a national human resource development institution.",
      "Investigation and ICT risk advisory engagement for a government qualifications body.",
      "Investigative and risk support engagements for a national power utility.",
    ],
  },
  {
    category: "Cyber Incident Response",
    items: [
      "Ransomware incident analysis and end-to-end forensic support for an energy regulatory authority.",
      "Ransomware incident investigation and follow-on cyber awareness programme for a public financial services institution.",
      "Cyber incident response and integrity investigation engagement for a government regulatory body.",
    ],
  },
  {
    category: "Digital Forensics",
    items: [
      "Digital forensic services engagement for a state-owned financial institution.",
      "Forensic support and reference engagement for a national defence institution.",
      "Digital forensic support provided in conjunction with fraud investigation and training mandate.",
    ],
  },
  {
    category: "Vulnerability Assessment & Penetration Testing",
    items: [
      "Penetration testing and vulnerability assessment for a higher education institution.",
      "Vulnerability assessment engagement for a national intelligence and security agency.",
      "Vulnerability assessment for a state-owned minerals development corporation.",
    ],
  },
  {
    category: "Cyber Awareness & National Programmes",
    items: [
      "National cyber awareness collaboration, cyber drill participation, and ScamDetect platform partnership with the national CSIRT (MoU under legal review).",
      "Cyber awareness support delivered alongside a ransomware incident investigation for a public institution.",
    ],
  },
  {
    category: "Training & Capacity Building",
    items: [
      "Cybersecurity and digital forensics training delivered to a national defence institution.",
      "Staff training and digital forensics capacity building for a government-mandated human development body.",
    ],
  },
];

export default function ClientEngagementsPage() {
  return (
    <>
      <PageHero
        kicker="Selected Engagements"
        title="Trusted by institutions across Botswana's public and private sectors"
        summary="E-Detectives has delivered investigations, digital forensics, cybersecurity, and training engagements for a range of government bodies, regulators, financial institutions, and corporates."
      />

      {/* Our Clients */}
      <section className="section-space page-shell">
        <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Our Clients</h2>
        <p className="mt-2 text-sm leading-7 max-w-2xl" style={{ color: "var(--text-muted)" }}>
          We have been engaged by the following organisations across Botswana's public and private sectors.
        </p>

        {(() => {
          const sectors = Array.from(new Set(clients.map((c) => c.sector)));
          return (
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
              {sectors.map((sector) => (
                <div key={sector}>
                  <p className="kicker mb-4">{sector}</p>
                  <ul className="space-y-0">
                    {clients
                      .filter((c) => c.sector === sector)
                      .map((c) => (
                        <li
                          key={c.name}
                          className="py-3 text-sm font-medium"
                          style={{ borderBottom: "1px solid var(--border)", color: "var(--text-heading)" }}
                        >
                          {c.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })()}
      </section>

      <div className="rule-line" />

      {/* Work Done */}
      <section className="section-space page-shell">
        <h2 className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Selected Work</h2>
        <p className="mt-2 text-sm leading-7 max-w-2xl" style={{ color: "var(--text-muted)" }}>
          The following represents a selection of engagements we have delivered. Client identities are protected under confidentiality undertakings.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-x-16 gap-y-10">
          {work.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold pb-3" style={{ color: "var(--text-heading)", borderBottom: "1px solid var(--border)" }}>{group.category}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6" style={{ color: "var(--text-muted)" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--teal)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-center" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          Specific engagement details are subject to confidentiality undertakings and are available on request, where appropriate.
        </p>
      </section>
    </>
  );
}
