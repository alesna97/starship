/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42b883",
        secondary: "#354952",
        pink: "#EB6E8B",
        yellow: "#F6CE6E",
        blue: "#7ED3E9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
