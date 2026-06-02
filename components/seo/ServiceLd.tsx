import React from "react";
import JsonLd from "./JsonLd";

type ServiceLdProps = {
  name: string;
  description?: string;
  url?: string;
  serviceType?: string;
  areaServed?: string | string[];
  provider?: {
    name?: string;
    url?: string;
  };
};

export default function ServiceLd({
  name,
  description,
  url,
  serviceType,
  areaServed,
  provider,
}: ServiceLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    ...(description ? { description } : {}),
    ...(url ? { url } : {}),
    ...(serviceType ? { serviceType } : {}),
    ...(areaServed ? { areaServed } : {}),
    provider: {
      "@type": "Organization",
      name: provider?.name ?? "ECITech",
      url: provider?.url ?? "https://ecitech.online",
    },
  };

  return <JsonLd data={data} id={`ld-service-${name.replace(/\s+/g, "-").toLowerCase()}`} />;
}
