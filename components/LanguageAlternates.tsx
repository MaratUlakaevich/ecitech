import { headers } from "next/headers";
import React from "react";
import { href, LOCALIZED_PATHS, ruSitePath, stripLocale } from "@/lib/i18n";

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
 * Renders hreflang <link rel="alternate"> tags. English locales point at
 * the root URL; pages with an Arabic twin also get hreflang="ar" and the
 * Russian site's twin gets hreflang="ru".
 */
export default function LanguageAlternates({ path }: LanguageAlternatesProps) {
  const resolvedPath = path ?? getPathFromHeaders();
  const enPath = stripLocale(resolvedPath.split(/[?#]/)[0] || "/");
  const localized = (LOCALIZED_PATHS as readonly string[]).includes(enPath);
  const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}` || SITE_URL;
  const enHref = abs(enPath);

  return (
    <>
      {LOCALES.map((loc) => (
        <link key={loc} rel="alternate" hrefLang={loc} href={enHref} />
      ))}
      {localized && (
        <>
          <link rel="alternate" hrefLang="ar" href={abs(href("ar", enPath))} />
          <link rel="alternate" hrefLang="ru" href={ruSitePath(enPath)} />
        </>
      )}
      <link rel="alternate" hrefLang="x-default" href={enHref} />
    </>
  );
}
