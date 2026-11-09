/**
 * Minimal two-locale setup. English lives at the root, Russian under /ru.
 * The marketing pages and the privacy/cookies documents are translated
 * (the RU documents name a different operator); the journal and the terms
 * stay English-only and are linked as-is from the Russian site.
 */
export type Locale = "en" | "ru";

export const LOCALES: Locale[] = ["en", "ru"];

/** Paths that have a Russian twin under /ru. */
export const LOCALIZED_PATHS = [
  "/",
  "/portfolio",
  "/services",
  "/industries",
  "/about",
  "/contact",
  "/privacy-policy",
  "/cookies-policy",
] as const;

const isLocalized = (path: string) =>
  (LOCALIZED_PATHS as readonly string[]).includes(path.split(/[?#]/)[0] || "/");

/** Strip the /ru prefix: "/ru/services" -> "/services", "/ru" -> "/". */
export function stripLocale(pathname: string): string {
  if (pathname === "/ru") return "/";
  if (pathname.startsWith("/ru/")) return pathname.slice(3);
  return pathname;
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
}

/**
 * Build a link for the given locale. Untranslated pages (journal, legal)
 * keep their English path. Hash-only and absolute links pass through.
 */
export function href(locale: Locale, path: string): string {
  if (locale === "en" || !path.startsWith("/")) return path;
  const [base, hash] = path.split("#");
  if (!isLocalized(base || "/")) return path;
  const prefixed = base === "/" ? "/ru" : `/ru${base}`;
  return hash !== undefined ? `${prefixed}#${hash}` : prefixed;
}

/** The same page in the other locale (falls back to that locale's home). */
export function alternatePath(pathname: string, target: Locale): string {
  const base = stripLocale(pathname);
  if (target === "en") return base;
  return isLocalized(base) ? href("ru", base) : "/ru";
}
