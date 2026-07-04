import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        space: {
          black: "#000000",
          darkBlue: "#03001e",
          deepBlue: "#0f0c1b",
          cyan: "#00f5ff",
          purple: "#bd00ff",
          magenta: "#ff007f",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
        "float": "float 6s ease-in-out infinite",
        "orbit": "orbit 30s linear infinite",
        "slow-spin": "spin 40s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0, 245, 255, 0.4), 0 0 5px rgba(0, 245, 255, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(189, 0, 255, 0.8), 0 0 15px rgba(189, 0, 255, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
