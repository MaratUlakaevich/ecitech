import { headers } from "next/headers";
import React from "react";
import { alternatePath, localeFromPath, LOCALIZED_PATHS, stripLocale } from "@/lib/i18n";

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
 * the root URL; pages with a Russian twin also get hreflang="ru".
 */
export default function LanguageAlternates({ path }: LanguageAlternatesProps) {
  const resolvedPath = path ?? getPathFromHeaders();
  const enPath = stripLocale(resolvedPath);
  const hasRu =
    localeFromPath(resolvedPath) === "ru" ||
    (LOCALIZED_PATHS as readonly string[]).includes(enPath);
  const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}` || SITE_URL;
  const enHref = abs(enPath);

  return (
    <>
      {LOCALES.map((loc) => (
        <link key={loc} rel="alternate" hrefLang={loc} href={enHref} />
      ))}
      {hasRu && (
        <link rel="alternate" hrefLang="ru" href={abs(alternatePath(enPath, "ru"))} />
      )}
      <link rel="alternate" hrefLang="x-default" href={enHref} />
    </>
  );
}
