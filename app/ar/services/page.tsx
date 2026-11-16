import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

const description =
  "المواقع، وأتمتة العمليات، وتكامل الذكاء الاصطناعي كمسار واحد: ثلاث طبقات، ولكل منها نطاق ثابت. تبدأ المشاريع من 10,000 دولار.";

export const metadata: Metadata = {
  title: "الخدمات — ECITech",
  description,
  alternates: { canonical: "https://ecitech.online/ar/services" },
  openGraph: {
    title: "الخدمات — ECITech",
    description,
    url: "https://ecitech.online/ar/services",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "الخدمات — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArServicesPage() {
  return <ServicesContent locale="ar" />;
}
