import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff6ed",
          100: "#ffead6",
          200: "#ffd0ac",
          300: "#ffaf75",
          400: "#ff8a3d",
          500: "#ff6b1a",
          600: "#e65100",
          700: "#b83f00",
          800: "#923400",
          900: "#772d06"
        },
        slate: {
          950: "#0f1720"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 32, 0.12)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

