import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#3B82F6",
        "accent-dark": "#2563EB",
        "accent-light": "#60A5FA",
        dark: {
          DEFAULT: "#0F0F0F",
          100: "#1A1A1A",
          200: "#242424",
          300: "#2E2E2E",
        },
        light: {
          DEFAULT: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        "blob-float": "blobFloat 8s ease-in-out infinite",
        "blob-float-delayed": "blobFloat 10s ease-in-out infinite 2s",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "gradient-x": "gradientX 4s ease infinite",
        "underline-expand": "underlineExpand 0.3s ease forwards",
      },
      keyframes: {
        blobFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        gradientX: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        underlineExpand: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-blue-lg": "0 0 40px rgba(59, 130, 246, 0.4)",
        card: "0 4px 20px rgba(0, 0, 0, 0.15)",
        "card-hover": "0 8px 40px rgba(59, 130, 246, 0.2)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
