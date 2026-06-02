import React from "react";
import JsonLd from "./JsonLd";

type ArticleLdProps = {
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  url?: string;
};

export default function ArticleLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
}: ArticleLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    ...(description ? { description } : {}),
    ...(image ? { image } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : { dateModified: datePublished }),
    author: {
      "@type": "Person",
      name: authorName ?? "ECITech Team",
    },
    publisher: {
      "@type": "Organization",
      name: "ECITech",
      logo: {
        "@type": "ImageObject",
        url: "https://ecitech.online/img/logo.png",
      },
    },
    ...(url
      ? {
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        }
      : {}),
  };

  return <JsonLd data={data} id="ld-article" />;
}
