import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Australian-inspired palette (Upwork-like hierarchy) */
        au: {
          navy: "#0c1929",
          ocean: "#0c4a6e",
          reef: "#0d9488",
          /** Australian sporting / institutional green */
          gum: "#00843D",
          gumbright: "#006d32",
          wattle: "#f5c518",
          sand: "#faf8f5",
          coral: "#c2410c",
          mist: "#e8f5e9",
        },
        brand: {
          blue: "#0c4a6e",
          green: "#00843D",
          orange: "#c2410c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        upwork: "8px",
      },
      boxShadow: {
        nav: "0 1px 0 rgba(0, 30, 0, 0.09)",
        search: "0 2px 8px rgba(12, 74, 110, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
        card: "0 2px 12px rgba(12, 25, 40, 0.06)",
        lift: "0 8px 24px rgba(12, 25, 40, 0.08)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
