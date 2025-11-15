import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
      colors: {
        "neu-bg": "#D4D9E0",
        "neu-text": "#2D3748",
        "neu-accent": "#4A5568",
        "neu-light": "#F7FAFC",
        "neu-dark": "#CBD5E0",
      },
      boxShadow: {
        "neu-sm":
          "6px 6px 12px rgba(140, 150, 170, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.7)",
        "neu-md":
          "9px 9px 18px rgba(140, 150, 170, 0.5), -9px -9px 18px rgba(255, 255, 255, 0.7)",
        "neu-lg":
          "12px 12px 24px rgba(140, 150, 170, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.8)",
        "neu-inset":
          "inset 8px 8px 16px rgba(140, 150, 170, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.7)",
        "neu-pressed":
          "inset 5px 5px 10px rgba(140, 150, 170, 0.5), inset -5px -5px 10px rgba(255, 255, 255, 0.7)",
      },
      borderRadius: {
        bubble: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
