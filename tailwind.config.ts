import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "var(--brand-maroon-900)",
          plum: "var(--brand-plum-800)",
          rose: "var(--brand-rose-700)",
          mauve: "var(--brand-mauve-600)",
          rose500: "var(--brand-rose-500)",
        },
        mahagathe: {
          red: "var(--mahagathe-red)",
        },
        pink: {
          "400": "var(--pink-400)",
          "200": "var(--pink-200)",
        },
        neutral: {
          "300": "var(--neutral-300)",
          "200": "var(--neutral-200)",
        },
        surface: {
          cream50: "var(--cream-50)",
          cream60: "var(--cream-60)",
          cream70: "var(--cream-70)",
          white: "var(--white)",
        },
        ink: {
          strong: "var(--ink-strong)",
          DEFAULT: "var(--ink-default)",
          muted: "var(--ink-muted)",
          subtle: "var(--ink-subtle)",
          faint: "var(--ink-faint)",
          inverse: "var(--ink-inverse)",
          black: "var(--ink-black)",
        },
        whatsapp: "var(--whatsapp)",
      },
      backgroundImage: {
        "banner-gradient": "var(--banner-gradient)",
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        md: "var(--radius-md)",
      },
      spacing: {
        "4": "0.25rem",
        "6": "0.375rem",
        "8": "0.5rem",
        "12": "0.75rem",
        "16": "1rem",
        "24": "1.5rem",
        "32": "2rem",
        "48": "3rem",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
