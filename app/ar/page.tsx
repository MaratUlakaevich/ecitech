import type { Metadata } from "next";
import MastheadHeader from "@/components/MastheadHeader";
import HeroSection from "@/components/HeroSection";
import SelectedWork from "@/components/SelectedWork";
import ServiceLadder from "@/components/ServiceLadder";
import ProcessSection from "@/components/ProcessSection";
import StudioAbout from "@/components/StudioAbout";
import FinalCTA from "@/components/FinalCTA";
import EditorialFooter from "@/components/EditorialFooter";

const description =
  "ECITech استوديو رقمي مستقل في الرياض. نبني المواقع الإلكترونية وتطبيقات الويب والجوال وأتمتة سير العمل وتكامل الذكاء الاصطناعي للشركات المتوسطة. مهندسون عملوا مع BCG Gamma وJuniper Networks وCisco وGoogle.";

export const metadata: Metadata = {
  title: "ECITech — مواقع وتطبيقات وأتمتة وتكامل الذكاء الاصطناعي",
  description,
  alternates: { canonical: "https://ecitech.online/ar" },
  openGraph: {
    title: "ECITech — مواقع وتطبيقات وأتمتة وتكامل الذكاء الاصطناعي",
    description,
    url: "https://ecitech.online/ar",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "ECITech — مواقع وتطبيقات وأتمتة وتكامل الذكاء الاصطناعي",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArHome() {
  return (
    <>
      <MastheadHeader locale="ar" />
      <main id="main" className="relative">
        <HeroSection locale="ar" />
        <SelectedWork locale="ar" />
        <ServiceLadder locale="ar" />
        <ProcessSection locale="ar" />
        <StudioAbout locale="ar" />
        <FinalCTA locale="ar" />
      </main>
      <EditorialFooter locale="ar" />
    </>
  );
}
