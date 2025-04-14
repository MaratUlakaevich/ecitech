import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "ECITech - Programming The Future of Your Business",
  description: "",
  icons: {
    icon: "/img/favicon.ico",
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
        <Script id="gtm-init" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMRP9WR8');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="apple-mobile-web-app-title" content="ECITech" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/img/site.webmanifest" />
        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
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
