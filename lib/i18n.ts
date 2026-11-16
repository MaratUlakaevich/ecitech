/**
 * Two locales on ecitech.online: English at the root, Arabic under /ar
 * (right-to-left). The marketing pages are translated; the journal and the
 * legal documents stay English and are linked as-is from the Arabic site.
 * The Russian site is a separate project at RU_SITE_URL.
 */
export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

/** The Russian site lives on its own subdomain since 2026-11-16. */
export const RU_SITE_URL = "https://ru.ecitech.online";

/** Writing direction per locale. */
export const dirOf = (locale: Locale): "ltr" | "rtl" => (locale === "ar" ? "rtl" : "ltr");

/** Paths that have an Arabic twin under /ar. */
export const LOCALIZED_PATHS = [
  "/",
  "/portfolio",
  "/services",
  "/services/apps",
  "/industries",
  "/about",
  "/contact",
] as const;

/** Paths the Russian site also has (for the RU link in the language switch). */
const RU_TWINS = ["/", "/portfolio", "/services", "/services/apps", "/industries", "/about", "/contact"];

const isLocalized = (path: string) =>
  (LOCALIZED_PATHS as readonly string[]).includes(path.split(/[?#]/)[0] || "/");

/** Strip the /ar prefix: "/ar/services" -> "/services", "/ar" -> "/". */
export function stripLocale(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  return pathname;
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

/**
 * Build a link for the given locale. Untranslated pages (journal, legal)
 * keep their English path. Hash-only and absolute links pass through.
 */
export function href(locale: Locale, path: string): string {
  if (locale === "en" || !path.startsWith("/")) return path;
  const [base, hash] = path.split("#");
  if (!isLocalized(base || "/")) return path;
  const prefixed = base === "/" ? "/ar" : `/ar${base}`;
  return hash !== undefined ? `${prefixed}#${hash}` : prefixed;
}

/** The same page in the other locale (falls back to that locale's home). */
export function alternatePath(pathname: string, target: Locale): string {
  const base = stripLocale(pathname.split(/[?#]/)[0] || "/");
  if (target === "en") return base;
  return isLocalized(base) ? href("ar", base) : "/ar";
}

/** The same page on the Russian site (falls back to its home). */
export function ruSitePath(pathname: string): string {
  const base = stripLocale(pathname.split(/[?#]/)[0] || "/");
  return RU_TWINS.includes(base) && base !== "/" ? `${RU_SITE_URL}${base}` : RU_SITE_URL;
}
