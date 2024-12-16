import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1140px',
      // => @media (min-width: 1140px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "infinite_scroll": {
          "100%": {
            transform: "translate(calc(-50% - 1.25rem))"
          }
        }
      },
      animation: {
        "infinite_scroll": "infinite_scroll 10s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;
