import type { Metadata } from "next";
import ServicesContent from "../../components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Practice: sites, automation, and AI integration",
  description:
    "ECITech ships sites, workflow automation, and AI integration as a single product ladder. One trajectory, three layers, fixed scope at each tier.",
  keywords: [
    "Next.js development",
    "AI workflow automation",
    "WhatsApp Business automation",
    "HubSpot integration",
    "Zoho CRM integration",
    "Arabic RTL website",
    "RAG system",
    "AI agent",
    "AI readiness audit",
  ],
  openGraph: {
    title: "Practice — ECITech",
    description:
      "Sites, then automation, then AI integration. One trajectory, three layers.",
    url: "https://ecitech.online/services",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech practice — service ladder",
      },
    ],
  },
  twitter: {
    title: "Practice — ECITech",
    description: "Sites, automation, and AI integration. Fixed scope at each layer.",
    images: ["/img/og/default.png"],
  },
};

export default function ServicesPage() {
  return <ServicesContent locale="en" />;
}
