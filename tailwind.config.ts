import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deep: "#0A2E29",
        mid: "#0F5B4E",
        bright: "#17A17E",
        spark: "#D8FF57",
        paper: "#F3FBF8",
        ink: "#06140F",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        driftGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.94)" },
          "38%": { opacity: "0.75", transform: "scale(1.06)" },
          "45%": { opacity: "0.25", transform: "scale(0.98)" },
          "60%": { opacity: "0.6", transform: "scale(1.02)" },
        },
        travel: {
          "0%": { left: "-8%" },
          "100%": { left: "108%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(8px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        driftGradient: "driftGradient 14s ease-in-out infinite",
        flicker: "flicker 3.2s ease-in-out infinite",
        travel: "travel 4.5s linear infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) forwards",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        bob: "bob 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
