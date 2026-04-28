import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { ScrollToTop } from "@/components/scroll-to-top";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.e-detectives.co.bw"),
  title: {
    default: "E-Detectives | Corporate Investigations and Cybersecurity",
    template: "%s | E-Detectives",
  },
  description:
    "E-Detectives is a Botswana-based specialist in corporate investigations, digital forensics, cybersecurity, incident response, SOC support, verification, and compliance support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-site" style={{ color: "var(--text-body)" }}>
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <ScrollToTop />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
