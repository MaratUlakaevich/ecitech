import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

const description =
  "ECITech استوديو رقمي مستقل أسسه مارات أولاكاييف في الرياض. مواقع وأتمتة وتكامل الذكاء الاصطناعي للشركات المتوسطة.";

export const metadata: Metadata = {
  title: "عن الاستوديو — ECITech",
  description,
  alternates: { canonical: "https://ecitech.online/ar/about" },
  openGraph: {
    title: "عن الاستوديو — ECITech",
    description,
    url: "https://ecitech.online/ar/about",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "عن الاستوديو — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArAboutPage() {
  return <AboutContent locale="ar" />;
}
