import type { Config } from "tailwindcss";

/**
 * Design tokens for the Lualca Acquisition Site.
 *
 * Palette (per CONTEXT.md): Charcoal text/UI + Gold accent on an Off-White
 * background. Premium and professional without the generic accounting-firm navy.
 * The typography scale is defined here, not set ad hoc in components.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Off-white background family
        cream: {
          DEFAULT: "#F7F3EC",
          50: "#FCFAF6",
          100: "#F7F3EC",
          200: "#EFE8DA",
        },
        // Charcoal text + UI family
        charcoal: {
          DEFAULT: "#22262B",
          50: "#EDEEEF",
          100: "#D4D6D9",
          400: "#6B7178",
          600: "#3A3F45",
          800: "#22262B",
          900: "#15181B",
        },
        // Gold accent for CTAs + highlights
        gold: {
          DEFAULT: "#B08A3E",
          light: "#C8A24B",
          600: "#9A7733",
          700: "#7E6129",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      // Fixed typographic scale — components reference these names, not raw sizes.
      fontSize: {
        "display": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "h1": ["clamp(2.25rem, 4.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "h2": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h3": ["1.375rem", { lineHeight: "1.25" }],
        "lead": ["1.25rem", { lineHeight: "1.6" }],
        "body": ["1.0625rem", { lineHeight: "1.65" }],
        "small": ["0.9375rem", { lineHeight: "1.5" }],
        "eyebrow": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        container: "76rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(34,38,43,0.04), 0 12px 32px -16px rgba(34,38,43,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
