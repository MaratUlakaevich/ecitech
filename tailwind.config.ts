import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1140px",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-instrument)", "Instrument Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Paper palette (Phase 1 primary surface for body sections 01–05)
        paper: {
          50:  "#FFFFFF",
          100: "#FAFAF8",
          200: "#F1F1EE",
          300: "#E5E5E0",
        },
        ink: {
          900: "#07070A",  // near-black for Paper body
          800: "#13131A",
          700: "#1A1D2E",  // warm deep ink for Copper close section
          500: "#54545A",
          400: "#888888",
          300: "#B0B0B0",
        },
        copper: {
          500: "#D4522E",  // Paper accent — hot orange punch
          600: "#B8633A",  // Copper warm — Section 06 close italic + accents
          700: "#964E2B",
        },
        cream: {
          50:  "#FBF7EE",
          100: "#F5EFE3",
          200: "#EEE5D1",
        },
        brass: {
          500: "#A08A5A",
        },
      },
      maxWidth: {
        hero:    "1100px",
        reading: "680px",
        measure: "520px",
      },
      keyframes: {
        infinite_scroll: {
          "100%": { transform: "translate(calc(-50% - 1.25rem))" },
        },
        reveal_up: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        wf_edge_draw: {
          "0%":   { opacity: "0",    strokeDashoffset: "800" },
          "20%":  { opacity: "0.18" },
          "100%": { opacity: "0.18", strokeDashoffset: "0" },
        },
        wf_node_fade:    { to: { opacity: "0.18" } },
        wf_accent_fade:  { to: { opacity: "0.42" } },
        wf_text_fade:    { to: { opacity: "0.40" } },
        wf_node_fade_primary:    { to: { opacity: "0.26" } },
        wf_accent_fade_primary:  { to: { opacity: "0.58" } },
        wf_text_fade_primary:    { to: { opacity: "0.82" } },
        wf_accent_pulse: {
          "0%, 100%": { opacity: "0.58" },
          "50%":      { opacity: "0.88" },
        },
        wf_pulse_show: {
          "0%, 5%":    { opacity: "0" },
          "20%, 80%":  { opacity: "0.78" },
          "95%, 100%": { opacity: "0" },
        },
        scroll_pulse: {
          "0%, 100%": { transform: "translateY(0)",   opacity: "0.4" },
          "50%":      { transform: "translateY(8px)", opacity: "1"   },
        },
      },
      animation: {
        infinite_scroll: "infinite_scroll 10s linear infinite",
        scroll_pulse:    "scroll_pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
