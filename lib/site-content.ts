export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  deliverables: string[];
  outcomes: string[];
};

export type Solution = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  linkedService: string;
};

export type Industry = {
  slug: string;
  name: string;
  painPoints: string[];
  support: string[];
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  summary: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  challenge: string;
  role: string;
  workPerformed: string;
  outcome: string;
  serviceTags: string[];
};

export const contact = {
  phoneDisplay: "+267 390 1000",
  phoneHref: "tel:+2673901000",
  whatsappDisplay: "+267 71 000 000",
  whatsappHref: "https://wa.me/26771000000",
  email: "confidential@e-detectives.co.bw",
  address: "Gaborone, Botswana",
  businessHours: "Mon-Fri, 08:00-17:00",
};

export const services: Service[] = [
  {
    slug: "corporate-investigations",
    title: "Corporate Investigations",
    short:
      "Fraud, misconduct, procurement irregularities, and internal risk investigations for institutional environments.",
    intro:
      "We support organisations that need fact-based investigation outcomes that stand up to executive, legal, and regulatory scrutiny.",
    deliverables: [
      "Scoping and investigation strategy",
      "Document and transaction review",
      "Witness and subject interviews",
      "Evidence-led investigation report",
    ],
    outcomes: [
      "Clarity on what happened and who was involved",
      "Reduced legal and reputational exposure",
      "Decision-ready findings for leadership",
    ],
  },
  {
    slug: "digital-forensics",
    title: "Digital Forensics",
    short:
      "Preservation and analysis of digital evidence across computers, mobile devices, email, and logs.",
    intro:
      "Our forensic workflows preserve chain-of-custody and produce clear evidence outputs for internal and legal use.",
    deliverables: [
      "Forensic imaging and evidence preservation",
      "Email and endpoint artefact analysis",
      "Timeline reconstruction",
      "Expert-ready technical reporting",
    ],
    outcomes: [
      "Evidence integrity maintained",
      "Faster fact discovery in complex incidents",
      "Support for litigation or disciplinary processes",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    short:
      "Risk-led cybersecurity assessments, controls review, and practical hardening support.",
    intro:
      "We translate technical risk into business priorities so leadership can act with confidence.",
    deliverables: [
      "Security posture assessments",
      "Vulnerability and exposure analysis",
      "Remediation prioritisation roadmap",
      "Policy and control recommendations",
    ],
    outcomes: [
      "Reduced attack surface",
      "Better resilience against common threats",
      "Improved assurance for stakeholders",
    ],
  },
  {
    slug: "incident-response",
    title: "Incident Response & Recovery",
    short:
      "Coordinated response and recovery support for cyber incidents and digital crises.",
    intro:
      "When incidents occur, we provide structured containment, investigation, and recovery guidance.",
    deliverables: [
      "Incident triage and containment guidance",
      "Impact and root cause analysis",
      "Recovery and continuity support",
      "Post-incident lessons and action plan",
    ],
    outcomes: [
      "Faster recovery from disruption",
      "Controlled response under pressure",
      "Clear board-level incident reporting",
    ],
  },
  {
    slug: "soc",
    title: "Security Operations Centre (SOC)",
    short:
      "Managed monitoring support, alert triage, and escalation workflows for continuous visibility.",
    intro:
      "Our SOC-aligned services improve detection quality and shorten response timelines.",
    deliverables: [
      "Monitoring workflow design",
      "Alert triage and prioritisation",
      "Escalation and incident coordination",
      "Operational reporting and tuning",
    ],
    outcomes: [
      "Earlier detection of suspicious activity",
      "Reduced alert fatigue",
      "Stronger operational security posture",
    ],
  },
  {
    slug: "vetting-verification",
    title: "Vetting, Verification & Due Diligence",
    short:
      "Background checks, supplier vetting, and due diligence support for informed decisions.",
    intro:
      "We help organisations verify people, partners, and transactions before risk materialises.",
    deliverables: [
      "Counterparty and supplier checks",
      "Background and integrity vetting",
      "Corporate records verification",
      "Due diligence risk summaries",
    ],
    outcomes: [
      "Lower third-party risk",
      "Improved procurement confidence",
      "Defensible due diligence records",
    ],
  },
  {
    slug: "data-protection",
    title: "Data Protection & Compliance Support",
    short:
      "Gap assessments, governance guidance, and policy improvements for data and compliance obligations.",
    intro:
      "We support practical compliance programs that fit operational realities while reducing regulatory risk.",
    deliverables: [
      "Compliance maturity assessment",
      "Policy and control gap analysis",
      "Corrective action planning",
      "Executive reporting and governance support",
    ],
    outcomes: [
      "Improved compliance readiness",
      "Stronger data governance",
      "Reduced regulatory exposure",
    ],
  },
  {
    slug: "training",
    title: "Training & Awareness",
    short:
      "Targeted awareness programs for fraud, cybersecurity, and responsible risk behaviour.",
    intro:
      "Our training approach is practical, role-based, and aligned to organisational risk priorities.",
    deliverables: [
      "Cyber and fraud awareness sessions",
      "Executive and leadership briefings",
      "Role-specific scenario workshops",
      "Behaviour and policy reinforcement materials",
    ],
    outcomes: [
      "Improved human risk resilience",
      "Higher reporting confidence",
      "Better security and compliance culture",
    ],
  },
];

export const solutions: Solution[] = [
  {
    name: "ScamDetect",
    slug: "scamdetect",
    tagline: "Early scam pattern identification and response support.",
    description:
      "ScamDetect helps organisations identify emerging fraud and scam patterns quickly, then coordinate controls, communications, and investigations before losses escalate.",
    linkedService: "Corporate Investigations",
  },
  {
    name: "IRRaaS",
    slug: "irraas",
    tagline: "Incident Response and Recovery as a Service.",
    description:
      "IRRaaS provides structured incident command, forensic support, and recovery guidance on-demand for organisations that need rapid support during disruption.",
    linkedService: "Incident Response & Recovery",
  },
  {
    name: "VIaaS",
    slug: "viaas",
    tagline: "Verification and Investigation as a Service.",
    description:
      "VIaaS provides ongoing verification, screening, and investigative support through a repeatable delivery model for procurement, HR, and risk teams.",
    linkedService: "Vetting, Verification & Due Diligence",
  },
  {
    name: "SOC Managed Monitoring",
    slug: "soc-managed-monitoring",
    tagline: "Continuous monitoring and actionable detection workflows.",
    description:
      "SOC Managed Monitoring gives organisations sustained visibility with practical triage, escalation, and response alignment across teams.",
    linkedService: "Security Operations Centre (SOC)",
  },
];

export const industries: Industry[] = [
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    painPoints: [
      "Fraud losses and insider collusion",
      "Regulatory and audit scrutiny",
      "Rapid incident containment pressure",
    ],
    support: [
      "Investigations and digital evidence support",
      "Cybersecurity risk assessment",
      "Verification and due diligence services",
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    painPoints: [
      "Claims fraud and document manipulation",
      "Third-party and broker due diligence",
      "Sensitive case confidentiality requirements",
    ],
    support: [
      "Fraud-focused investigations",
      "Digital artefact and communication analysis",
      "Evidence-driven reporting for decision-making",
    ],
  },
  {
    slug: "mining",
    name: "Mining",
    painPoints: [
      "Asset and procurement irregularities",
      "Remote-site security visibility gaps",
      "High operational disruption impact",
    ],
    support: [
      "Corporate misconduct investigations",
      "Site and digital risk assessments",
      "Incident response and recovery planning",
    ],
  },
  {
    slug: "government-regulators",
    name: "Government & Regulators",
    painPoints: [
      "Complex compliance obligations",
      "Public accountability and scrutiny",
      "Critical infrastructure cyber risk",
    ],
    support: [
      "Evidence-based investigative support",
      "Data protection and compliance advisory",
      "Training and awareness for public sector teams",
    ],
  },
  {
    slug: "law-firms-legal-advisors",
    name: "Law Firms & Legal Advisors",
    painPoints: [
      "Need for defensible digital evidence",
      "Tight legal timelines",
      "Cross-disciplinary case coordination",
    ],
    support: [
      "Forensic evidence preservation",
      "Expert-ready investigative reporting",
      "Matter-specific technical advisory support",
    ],
  },
  {
    slug: "smes",
    name: "SMEs",
    painPoints: [
      "Limited in-house specialist security capacity",
      "High disruption impact from incidents",
      "Vendor and hiring risk exposure",
    ],
    support: [
      "Practical, right-sized security services",
      "Incident response assistance",
      "Ongoing vetting and verification support",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "procurement-irregularity-review",
    title: "Procurement Irregularity Review in a Multi-Site Operation",
    challenge:
      "A client identified unusual vendor patterns across multiple departments and needed an independent, confidential review.",
    role: "Lead investigation and digital evidence analysis partner.",
    workPerformed:
      "Scoped the investigation, reviewed digital and transactional records, interviewed key stakeholders, and delivered an evidence-led findings report.",
    outcome:
      "The organisation took corrective action, strengthened controls, and reduced repeat risk through improved governance.",
    serviceTags: ["Corporate Investigations", "Digital Forensics"],
  },
  {
    slug: "ransomware-response-coordination",
    title: "Ransomware Response Coordination for an Institutional Client",
    challenge:
      "A cyber incident disrupted critical systems and required immediate containment and recovery planning.",
    role: "Incident response coordination and forensic support.",
    workPerformed:
      "Supported triage, evidence collection, impact analysis, recovery prioritisation, and executive reporting throughout the response window.",
    outcome:
      "Core services were restored, recurrence controls were implemented, and leadership gained a clear remediation roadmap.",
    serviceTags: ["Incident Response & Recovery", "Cybersecurity Services"],
  },
  {
    slug: "supplier-risk-vetting-program",
    title: "Supplier Risk Vetting Program for a Regulated Environment",
    challenge:
      "The client needed stronger third-party due diligence without delaying procurement decisions.",
    role: "Verification and due diligence design partner.",
    workPerformed:
      "Built a risk-tiered vetting workflow, conducted targeted verification checks, and delivered concise decision-support summaries.",
    outcome:
      "Higher confidence in supplier onboarding decisions and reduced third-party risk exposure.",
    serviceTags: ["Vetting, Verification & Due Diligence"],
  },
  {
    slug: "security-monitoring-maturity-uplift",
    title: "Security Monitoring Maturity Uplift for a Growing Business",
    challenge:
      "Limited detection capability made it difficult to identify and escalate suspicious activity quickly.",
    role: "SOC and monitoring advisory partner.",
    workPerformed:
      "Assessed monitoring coverage, introduced triage and escalation practices, and established reporting metrics for leadership.",
    outcome:
      "Faster identification of high-risk events and measurable improvement in security operations visibility.",
    serviceTags: ["Security Operations Centre (SOC)", "Cybersecurity Services"],
  },
];

export const insights: Insight[] = [
  {
    slug: "why-evidence-chain-of-custody-matters",
    title: "Why Evidence Chain of Custody Matters in Corporate Investigations",
    category: "Digital Forensics",
    publishedAt: "2026-04-10",
    summary:
      "A practical view of how preserving digital evidence integrity protects outcomes in legal, disciplinary, and governance settings.",
    body: [
      "Investigations that involve digital systems require disciplined evidence handling from the first touchpoint.",
      "When organisations preserve chain of custody correctly, decision-makers can rely on findings and act faster with reduced risk.",
      "Practical controls include documented acquisition steps, restricted evidence access, and repeatable reporting formats.",
    ],
  },
  {
    slug: "incident-response-first-24-hours",
    title: "Incident Response: Priorities for the First 24 Hours",
    category: "Incident Response",
    publishedAt: "2026-03-28",
    summary:
      "A business-focused checklist for triage, containment, communications, and recovery planning during early incident response.",
    body: [
      "The first 24 hours of a cyber incident shape both operational impact and long-term recovery cost.",
      "A structured response model helps teams prioritise containment, preserve evidence, and align leadership communication.",
      "After stabilisation, organisations should convert lessons learned into clear improvements across controls and processes.",
    ],
  },
  {
    slug: "third-party-risk-due-diligence",
    title: "Reducing Third-Party Risk Through Better Due Diligence",
    category: "Verification",
    publishedAt: "2026-03-16",
    summary:
      "How risk-tiered vetting improves procurement confidence and reduces downstream exposure.",
    body: [
      "Third-party risk often enters through speed-driven decisions with limited verification depth.",
      "Risk-tiered due diligence ensures high-risk engagements receive enhanced checks while routine cases remain efficient.",
      "When supported by consistent evidence summaries, procurement and compliance teams make more defensible decisions.",
    ],
  },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  dropdownAlign?: "left" | "right";
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Solutions", href: "/solutions" },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Insights",
    href: "/insights",
    dropdownAlign: "right",
    children: insights.map((p) => ({ label: p.title, href: `/insights/${p.slug}` })),
  },
  { label: "Contact", href: "/contact" },
];
