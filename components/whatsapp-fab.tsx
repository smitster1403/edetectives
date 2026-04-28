import { contact } from "@/lib/site-content";

export function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappHref}
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 z-30 border border-emerald-600 bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:border-[#39ff6a] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_0_12px_3px_rgba(57,255,106,0.9),0_0_32px_10px_rgba(57,255,106,0.5),0_0_60px_22px_rgba(34,197,94,0.25)]"
    >
      WhatsApp
    </a>
  );
}
