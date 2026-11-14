import type { Metadata } from "next";
import AppsContent from "../../../components/pages/AppsContent";

const description =
  "Web apps and mobile apps for iOS and Android: client portals, internal systems, subscription products. Fixed price per project, from $10,000.";

export const metadata: Metadata = {
  title: "Web and mobile app development — ECITech",
  description,
  alternates: {
    canonical: "https://ecitech.online/services/apps",
    languages: { en: "https://ecitech.online/services/apps", ru: "https://ecitech.online/ru/services/apps" },
  },
  openGraph: {
    title: "Web and mobile apps — ECITech",
    description,
    url: "https://ecitech.online/services/apps",
    images: [{ url: "/img/og/default.png", width: 1200, height: 630, alt: "ECITech" }],
  },
  twitter: {
    title: "Web and mobile apps — ECITech",
    description,
    images: ["/img/og/default.png"],
  },
};

export default function AppsPage() {
  return <AppsContent locale="en" />;
}
