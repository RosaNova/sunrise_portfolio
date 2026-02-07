import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boldonse: ["Boldonse", "system-ui"],
        dm: ["DM Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("daisyui")]
};
