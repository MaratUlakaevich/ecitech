import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

const description =
  "احجزوا مكالمة مدتها 30 دقيقة أو راسلونا. نرد خلال 15 دقيقة، ونرسل النطاق والسعر الثابت خلال أسبوع.";

export const metadata: Metadata = {
  title: "تواصل معنا — ECITech",
  description,
  alternates: { canonical: "https://ecitech.online/ar/contact" },
  openGraph: {
    title: "تواصل معنا — ECITech",
    description,
    url: "https://ecitech.online/ar/contact",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "تواصل معنا — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArContactPage() {
  return <ContactContent locale="ar" />;
}
