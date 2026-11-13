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

export const literataCyrillic = localFont({
  src: [
    { path: "./literata/cyrillic-normal-200-900.woff2", weight: "200 900", style: "normal" },
    { path: "./literata/cyrillic-italic-200-900.woff2", weight: "200 900", style: "italic" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
  declarations: [{ prop: "unicode-range", value: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116" }],
});

export const literataLatin = localFont({
  src: [
    { path: "./literata/latin-normal-200-900.woff2", weight: "200 900", style: "normal" },
    { path: "./literata/latin-italic-200-900.woff2", weight: "200 900", style: "italic" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});

export const plexsansCyrillic = localFont({
  src: [
    { path: "./plexsans/cyrillic-normal-400-700.woff2", weight: "400 700", style: "normal" },
    { path: "./plexsans/cyrillic-italic-400-700.woff2", weight: "400 700", style: "italic" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "unicode-range", value: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116" }],
});

export const plexsansLatin = localFont({
  src: [
    { path: "./plexsans/latin-normal-400-700.woff2", weight: "400 700", style: "normal" },
    { path: "./plexsans/latin-italic-400-700.woff2", weight: "400 700", style: "italic" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
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
  // Cyrillic faces for the /ru site. Not preloaded: English pages never use them.
  "--font-literata": stack(literataLatin, literataCyrillic),
  "--font-plex-sans": stack(plexsansLatin, plexsansCyrillic),
} as CSSProperties;
