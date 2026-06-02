import { headers } from "next/headers";
import React from "react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ecitech.online";

const LOCALES = ["en-US", "en-GB", "en-AE", "en-SA"] as const;

type LanguageAlternatesProps = {
  /**
   * Optional explicit path (e.g. "/about"). If omitted, the component
   * attempts to read the current pathname from incoming request headers
   * (x-invoke-path / x-pathname / next-url).
   */
  path?: string;
};

function getPathFromHeaders(): string {
  try {
    const h = headers();
    const path =
      h.get("x-invoke-path") ||
      h.get("x-pathname") ||
      h.get("next-url") ||
      "/";
    // next-url can contain query string; strip it
    const clean = path.split("?")[0] || "/";
    return clean.startsWith("/") ? clean : `/${clean}`;
  } catch {
    return "/";
  }
}

/**
 * Renders hreflang <link rel="alternate"> tags for all supported English
 * locales. All locales currently point at the same URL (we do not have
 * translated variants yet).
 */
export default function LanguageAlternates({ path }: LanguageAlternatesProps) {
  const resolvedPath = path ?? getPathFromHeaders();
  const href = `${SITE_URL}${resolvedPath === "/" ? "" : resolvedPath}`;

  return (
    <>
      {LOCALES.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc}
          href={href || SITE_URL}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={href || SITE_URL} />
    </>
  );
}
