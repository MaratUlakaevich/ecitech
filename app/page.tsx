import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import SelectedWork from "../components/SelectedWork";
import ServiceLadder from "../components/ServiceLadder";
import ProcessSection from "../components/ProcessSection";
import StudioAbout from "../components/StudioAbout";
import FinalCTA from "../components/FinalCTA";
import EditorialFooter from "../components/EditorialFooter";

/**
 * ECITech home page — Phase 2 (full assembly).
 *
 *   01  Hero            (Paper, workflow SVG bg, masthead + nav)
 *   02  Selected Work   (6 portfolio cases as editorial plates)
 *   03  Practice        (Service ladder: Audit / Sites / Automation / Integration)
 *   04  Process         (Brief → Sprint → Launch → Operate + pull-quote)
 *   05  The Studio      (Founder narrative, stats, locations)
 *   06  Begin           (Copper warm close — final CTA)
 *      Footer           (Editorial masthead reprise)
 */

export const metadata: Metadata = {
  title:
    "ECITech — An independent digital studio. Sites, automation, AI integration.",
  description:
    "ECITech is an independent digital studio. We build websites, workflow automation, and AI integration for mid-market businesses. Built by engineers who shipped for BCG Gamma, Juniper Networks, Cisco, and Google.",
  keywords: [
    "ECITech",
    "boutique digital studio",
    "Next.js development agency",
    "AI integration",
    "workflow automation",
    "Telegram bot development",
    "amoCRM integration",
    "Bitrix24 integration",
    "RAG system",
    "AI workflow partner",
  ],
  metadataBase: new URL("https://ecitech.online"),
  openGraph: {
    title: "ECITech — Sites · Automation · AI Integration",
    description:
      "An independent digital studio for mid-market teams.",
    url: "https://ecitech.online",
    siteName: "ECITech",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech — independent digital studio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECITech — Sites · Automation · AI Integration",
    description:
      "Independent digital studio. Built by engineers who shipped for BCG Gamma, Juniper, Cisco, and Google.",
    images: ["/img/og/default.png"],
    creator: "@ecitech_online",
  },
  icons: {
    icon: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
    shortcut: "/img/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <main className="relative">
        <HeroSection />
        <SelectedWork />
        <ServiceLadder />
        <ProcessSection />
        <StudioAbout />
        <FinalCTA />
      </main>
      <EditorialFooter />
    </>
  );
}
