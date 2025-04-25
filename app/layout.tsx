import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/UI/sonner"

export const metadata: Metadata = {
  title: "ECITech — Programming the Future of Your Business",
  description: "We develop cutting-edge web and mobile applications tailored to your business needs.",
  metadataBase: new URL("https://ecitech.online"),
  openGraph: {
    title: "ECITech — Custom Software Development",
    description: "Modern web and mobile development for startups and enterprises.",
    url: "https://ecitech.online",
    siteName: "ECITech",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECITech — Custom Software Solutions",
    description: "We build scalable and secure applications that drive business growth.",
    images: ["/img/og/default.png"],
    creator: "@ecitech_online",
  },
  icons: {
    icon: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="ECITech" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/img/site.webmanifest" />
        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
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
      <body className="overscroll-none h-full">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMRP9WR8"
            height="0" width="0" 
            style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
