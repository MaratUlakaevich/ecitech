import type { Metadata } from "next";
import AppsContent from "@/components/pages/AppsContent";

const description =
  "تطبيقات ويب وتطبيقات جوال لنظامي iOS وAndroid: بوابات العملاء، والأنظمة الداخلية، ومنتجات الاشتراك. سعر ثابت لكل مشروع، يبدأ من 10,000 دولار.";

export const metadata: Metadata = {
  title: "تطوير تطبيقات الويب والجوال — ECITech",
  description,
  alternates: { canonical: "https://ecitech.online/ar/services/apps" },
  openGraph: {
    title: "تطوير تطبيقات الويب والجوال — ECITech",
    description,
    url: "https://ecitech.online/ar/services/apps",
    locale: "ar_SA",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "تطوير تطبيقات الويب والجوال — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function ArAppsPage() {
  return <AppsContent locale="ar" />;
}
