import Image from "next/image";

type Leader = {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
};

const leaders: Leader[] = [
  {
    id: "douglas",
    name: "Douglas Sekgweng",
    title: "Founder & Managing Director",
    bio: "Douglas Sekgweng is the Founder and Managing Director of E-Detectives, a Botswana-based corporate investigations, digital forensics, cybersecurity, and risk intelligence firm. He is a former police officer and crime intelligence operative, with extensive experience in investigations, intelligence gathering, digital evidence handling, cybercrime response, fraud investigations, and corporate risk advisory.\n\nDouglas is regarded as one of Botswana's early pioneers in cyber forensics, having played a key role in the establishment and development of the Botswana Police Cyber Forensic Unit. He was also among the first certified EC-Council instructors in Botswana for Certified Ethical Hacker (CEH) and Computer Hacking Forensic Investigator (CHFI), contributing to the development of local cybersecurity and digital forensic capacity.\n\nAs an alumnus of the Stanford Seed Transformation Program, Douglas combines investigative discipline, entrepreneurial thinking, and technology-driven innovation to help institutions respond to modern fraud, cybercrime, internal misconduct, procurement irregularities, and complex digital evidence matters.\n\nUnder his leadership, E-Detectives has grown into a trusted investigations and cybersecurity firm serving government institutions, regulators, corporates, financial institutions, and critical infrastructure operators. He also leads the development of ScamDetect Africa, an anti-fraud and risk intelligence platform designed to strengthen scam reporting, cybercrime intelligence, due diligence, and public awareness across Botswana and the wider African market.",
    imageSrc: "/leaders/Douglas.jpeg",
  },
  {
    id: "dr-lefoane",
    name: "Dr. Moemedi Lefoane, PhD",
    title: "Consultant Expert – AI & Cyber Threat Intelligence",
    bio: "Dr. Moemedi Lefoane is a specialist in Artificial Intelligence, Cyber Threat Intelligence, IoT security, botnet detection, and graph-based cyber analytics. He serves as a consultant expert to E-Detectives, bringing strong academic and applied expertise in AI-driven threat detection, cybercrime intelligence, anomaly detection, and digital risk modelling.\n\nHis research background includes a PhD from the University of Bradford, focused on an AI and graph theory-based system for detecting Internet of Things botnets. He also serves as a Senior Lecturer in Computer Science at the University of Botswana, where he contributes to cybersecurity research, skills development, and advanced computing education.\n\nDr. Lefoane strengthens E-Detectives' capability to deliver intelligence-led cybersecurity, digital forensics, scam detection, and advanced cyber risk advisory services to government, regulators, enterprises, and critical infrastructure operators.",
    imageSrc: "/leaders/Dr.Lefoane.jpeg",
  },
  {
    id: "themba",
    name: "Themba Phillimon",
    title: "Consultant Investigator – Corporate Investigations & Intelligence",
    bio: "Themba Phillimon is a seasoned investigations specialist and former CID Officer-in-Charge at Broadhurst Police Station, bringing over 20 years of law enforcement, criminal investigations, and intelligence-gathering experience to E-Detectives.\n\nHe has handled a wide range of complex matters, including cross-border crime, fraud, fuel theft, corruption, money laundering, and organized criminal activity. His background in traditional investigations gives him strong expertise in case assessment, witness handling, statement taking, surveillance support, evidence gathering, suspect profiling, and intelligence-led inquiry.\n\nAt E-Detectives, Themba adds significant field investigation capability to the Investigation Unit, strengthening the company's ability to conduct thorough, discreet, and evidence-based investigations for corporate clients, government institutions, insurers, financial institutions, and high-risk commercial environments.\n\nHis practical investigative experience, command background, and exposure to complex criminal networks make him a valuable asset in matters involving fraud, internal misconduct, asset theft, procurement irregularities, and organized economic crime.",
    imageSrc: "/leaders/Themba.jpeg",
  },
];

export function LeaderCards() {
  return (
    <div className="space-y-16">
      {leaders.map((leader, index) => {
        const imageLeft = index % 2 === 0;
        return (
          <div
            key={leader.id}
            className={`flex flex-col md:flex-row ${imageLeft ? "" : "md:flex-row-reverse"}`}
          >
            {/* Photo */}
            <div className="shrink-0 w-full md:w-80">
              <Image
                src={leader.imageSrc}
                alt={leader.name}
                width={400}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Bio */}
            <div
              className="flex flex-col justify-center p-6 md:p-8"
              style={{ flex: 1 }}
            >
              <h3 className="text-xl font-semibold leading-snug" style={{ color: "var(--text-heading)" }}>
                {leader.name}
              </h3>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--teal)" }}>
                {leader.title}
              </p>
              <div className="mt-5 space-y-4">
                {leader.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-7" style={{ color: "var(--text-muted)" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
