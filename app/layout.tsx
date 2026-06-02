import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/UI/sonner";
import OrganizationLd from "@/components/seo/OrganizationLd";
import LanguageAlternates from "@/components/LanguageAlternates";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

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
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable}`}
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
        <Script id="gtm-init" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMRP9WR8');
          `}
        </Script>
      </head>
      <body className="overscroll-none min-h-screen antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMRP9WR8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
