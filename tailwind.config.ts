import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

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
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
