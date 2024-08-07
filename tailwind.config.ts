import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#006aa0",
        "blue-light": "#00a8ef",
        "border-blue-dark": "#006aa0",
        "border-blue-light": "#00a8ef",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'bounce-vertical': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-bottom": "slide-in-bottom 0.5s ease-out forwards",
        'bounce-vertical': 'bounce-vertical 2s infinite',
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
