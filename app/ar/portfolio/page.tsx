import type { Metadata } from "next";
import PortfolioContent from "@/components/pages/PortfolioContent";

const description =
  "اثنا عشر مشروعًا يعمل فعليًا: متجر زهور، ودار عطور، ونظام ERP، وعيادة طبية، ومساحة ثقافية، وشركة مقاولات، ومشروع سكني، ووكالة تسويق، ومنتج مشروبات، وغيرها.";

export const metadata: Metadata = {
  title: "أعمالنا — ECITech",
  description,
  alternates: { canonical: "https://ecitech.online/ar/portfolio" },
  openGraph: {
    title: "أعمالنا — ECITech",
    description,
    url: "https://ecitech.online/ar/portfolio",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "أعمالنا — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArPortfolioPage() {
  return <PortfolioContent locale="ar" />;
}
