// Self-hosted copies of the Google Fonts the site uses, so builds never depend on
// fonts.googleapis.com. Files are Google's own subset woff2s; regenerate them the same way
// if a family or axis changes. Each subset is its own face with its unicode-range,
// and the families are composed into CSS variables in app/layout.tsx.
import localFont from "next/font/local";
import type { CSSProperties } from "react";

export const frauncesLatin = localFont({
  src: [
    { path: "./fraunces/latin-normal-100-900.woff2", weight: "100 900", style: "normal" },
    { path: "./fraunces/latin-italic-100-900.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: "Times New Roman",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});

export const instrumentLatin = localFont({
  src: [
    { path: "./instrument/latin-normal-400-700.woff2", weight: "400 700", style: "normal" },
    { path: "./instrument/latin-italic-400-700.woff2", weight: "400 700", style: "italic" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});

export const plexmonoLatin = localFont({
  src: [
    { path: "./plexmono/latin-normal-400.woff2", weight: "400", style: "normal" },
    { path: "./plexmono/latin-normal-500.woff2", weight: "500", style: "normal" },
    { path: "./plexmono/latin-normal-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});

/* Arabic faces for the /ar site. Not preloaded: English pages never use them.
   IBM Plex Sans Arabic for text (same family as Plex Mono), Noto Naskh Arabic
   for display headings. Google's own arabic-subset woff2s. */
export const plexArabic = localFont({
  src: [
    { path: "./plexsansarabic/arabic-normal-400.woff2", weight: "400", style: "normal" },
    { path: "./plexsansarabic/arabic-normal-500.woff2", weight: "500", style: "normal" },
    { path: "./plexsansarabic/arabic-normal-600.woff2", weight: "600", style: "normal" },
    { path: "./plexsansarabic/arabic-normal-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC" }],
});

export const naskhArabic = localFont({
  src: [{ path: "./notonaskh/arabic-normal-400-700.woff2", weight: "400 700", style: "normal" }],
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC" }],
});

type Face = { style: { fontFamily: string } };
/** Real faces first (each limited to its subset), then the first face's metric-matched fallback. */
const stack = (...faces: Face[]) => {
  const parts = faces.map((f) => f.style.fontFamily.split(/,\s*/));
  return [...parts.map((p) => p[0]), parts[0][1]].filter(Boolean).join(", ");
};

/** CSS variables set on <html>; the names match what globals.css and Tailwind read. */
export const fontVariables = {
  "--font-fraunces": stack(frauncesLatin),
  "--font-instrument": stack(instrumentLatin),
  "--font-plex-mono": stack(plexmonoLatin),
  // Arabic pages: Arabic glyphs from these faces, Latin (names, numbers) from the English ones.
  "--font-naskh": stack(naskhArabic, frauncesLatin),
  "--font-plex-arabic": stack(plexArabic, instrumentLatin),
} as CSSProperties;
