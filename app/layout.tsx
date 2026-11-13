import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import { headers } from "next/headers";
import { localeFromPath } from "@/lib/i18n";
import "./globals.css";
import SiteScripts from "@/components/SiteScripts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/UI/sonner";
import OrganizationLd from "@/components/seo/OrganizationLd";
import LanguageAlternates from "@/components/LanguageAlternates";

export const metadata: Metadata = {
  title: "ECITech — An independent digital studio. Sites, automation, AI integration.",
  description:
    "ECITech is an independent digital studio. We build sites, automation, and AI integration for mid-market businesses.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = localeFromPath(headers().get("x-pathname") ?? "/");
  return (
    <html
      lang={lang}
      style={fontVariables}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="ECITech" />
        <link rel="alternate" type="application/rss+xml" href="/rss" title="ECITech Journal RSS" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/img/site.webmanifest" />
        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#D4522E" />
        <meta name="theme-color" content="#FAFAF8" />
        <OrganizationLd />
        <LanguageAlternates />
      </head>
      <body className="overscroll-none min-h-screen antialiased">
        {children}
        <Toaster />
        {/* Analytics load only after consent; RU pages get Yandex Metrica, never Google/Vercel. */}
        <SiteScripts ymId={process.env.NEXT_PUBLIC_YM_ID} />
        {lang === "en" && <SpeedInsights />}
      </body>
    </html>
  );
}
