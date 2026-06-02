import React from "react";
import JsonLd from "./JsonLd";

export type BreadcrumbItem = {
  name: string;
  /** Absolute URL or path (will be prepended with site origin if relative). */
  url: string;
};

type BreadcrumbsLdProps = {
  items: BreadcrumbItem[];
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ecitech.online";

function absolute(url: string) {
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function BreadcrumbsLd({ items }: BreadcrumbsLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absolute(item.url),
    })),
  };

  return <JsonLd data={data} id="ld-breadcrumbs" />;
}
