import type { Metadata } from "next";
import IndustriesContent from "@/components/pages/IndustriesContent";

const description =
  "مواقع وتكامل الذكاء الاصطناعي للرعاية الصحية، والعقارات والمقاولات، والضيافة، والتجزئة، والخدمات المهنية، والعلامات الشخصية.";

export const metadata: Metadata = {
  title: "القطاعات — ECITech",
  description,
  alternates: { canonical: "https://ecitech.online/ar/industries" },
  openGraph: {
    title: "القطاعات — ECITech",
    description,
    url: "https://ecitech.online/ar/industries",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "القطاعات — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArIndustriesPage() {
  return <IndustriesContent locale="ar" />;
}
