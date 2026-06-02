import React from "react";
import JsonLd from "./JsonLd";

/**
 * Site-wide Organization schema for ECITech.
 * Mounted once in the root <head> via app/layout.tsx.
 */
export default function OrganizationLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ECITech",
    url: "https://ecitech.online",
    logo: "https://ecitech.online/img/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/ecitech-sa",
      "https://x.com/ecitech_online",
      "https://clutch.co/profile/ecitech",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966-53-700-0805",
        email: "info@ecitech.online",
        contactType: "sales",
        areaServed: ["SA", "AE", "GB", "US"],
        availableLanguage: ["English", "Arabic", "Russian"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Moscow",
        addressCountry: "RU",
      },
    ],
  };

  return <JsonLd data={data} id="ld-organization" />;
}
