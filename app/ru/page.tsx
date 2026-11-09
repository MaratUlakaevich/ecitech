import type { Metadata } from "next";
import MastheadHeader from "../../components/MastheadHeader";
import HeroSection from "../../components/HeroSection";
import SelectedWork from "../../components/SelectedWork";
import ServiceLadder from "../../components/ServiceLadder";
import ProcessSection from "../../components/ProcessSection";
import StudioAbout from "../../components/StudioAbout";
import FinalCTA from "../../components/FinalCTA";
import EditorialFooter from "../../components/EditorialFooter";

export const metadata: Metadata = {
  title: "ECITech — независимая digital-студия. Сайты, автоматизация, ИИ-интеграция.",
  description:
    "ECITech делает сайты, автоматизацию процессов и ИИ-интеграцию для компаний среднего бизнеса. Инженеры с опытом в BCG Gamma, Juniper Networks, Cisco и Google.",
  alternates: { canonical: "https://ecitech.online/ru" },
  openGraph: {
    title: "ECITech — сайты, автоматизация, ИИ-интеграция",
    description: "ECITech делает сайты, автоматизацию процессов и ИИ-интеграцию для компаний среднего бизнеса. Инженеры с опытом в BCG Gamma, Juniper Networks, Cisco и Google.",
    url: "https://ecitech.online/ru",
    locale: "ru_RU",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "ECITech — сайты, автоматизация, ИИ-интеграция",
    description: "ECITech делает сайты, автоматизацию процессов и ИИ-интеграцию для компаний среднего бизнеса. Инженеры с опытом в BCG Gamma, Juniper Networks, Cisco и Google.",
    images: ["/img/og/default.png"],
  },
};

export default function RuHome() {
  return (
    <>
      <MastheadHeader locale="ru" />
      <main id="main" className="relative">
        <HeroSection locale="ru" />
        <SelectedWork locale="ru" />
        <ServiceLadder locale="ru" />
        <ProcessSection locale="ru" />
        <StudioAbout locale="ru" />
        <FinalCTA locale="ru" />
      </main>
      <EditorialFooter locale="ru" />
    </>
  );
}
