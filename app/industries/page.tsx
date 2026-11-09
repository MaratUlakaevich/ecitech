import type { Metadata } from "next";
import IndustriesContent from "../../components/pages/IndustriesContent";

export const metadata: Metadata = {
  title: "Industries — Where ECITech works",
  description:
    "ECITech delivers boutique sites and AI integration for healthcare, real estate, construction, hospitality, retail, and cultural institutions.",
  keywords: [
    "industries served",
    "healthcare digital studio",
    "real estate AI agency",
    "construction website agency",
    "hospitality AI integration",
    "boutique digital studio",
  ],
  openGraph: {
    title: "Industries — ECITech",
    description:
      "Boutique sites and AI integration for healthcare, real estate, construction, hospitality, retail, and cultural institutions.",
    url: "https://ecitech.online/industries",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "Industries — ECITech",
      },
    ],
  },
  twitter: {
    title: "Industries — ECITech",
    description: "Six sectors we know well.",
    images: ["/img/og/default.png"],
  },
};

export default function IndustriesPage() {
  return <IndustriesContent locale="en" />;
}
