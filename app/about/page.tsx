import type { Metadata } from "next";
import AboutContent from "../../components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Studio — ECITech",
  description:
    "ECITech is an independent digital studio founded by Marat Ulakaev. Sites, automation, and AI integration for the mid-market.",
  keywords: [
    "about ECITech",
    "Marat Ulakaev",
    "boutique digital studio",
    "founder-led studio",
    "Next.js developer founder",
  ],
  openGraph: {
    title: "Studio — ECITech",
    description:
      "Founded by an engineer who shipped systems for BCG Gamma, Juniper, Cisco, and Google. Intentionally small.",
    url: "https://ecitech.online/about",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech — the studio",
      },
    ],
  },
  twitter: {
    title: "Studio — ECITech",
    description: "Independent digital studio. Founded 2024.",
    images: ["/img/og/default.png"],
  },
};

export default function AboutPage() {
  return <AboutContent locale="en" />;
}
