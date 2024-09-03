/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      blue: "#0147FF",
      navy: "#0028FF",
      white: "#F7F7F7",
      black: "#282828",
      transparent: "#ffffff00",
    },
    extend: {
      fontSize: {
        "header-xl": ["32px", { fontWeight: "500" }],
        "header-lg": ["24px", { fontWeight: "500" }],
        "header-md": ["16px", { fontWeight: "500" }],
        "header-sm": ["14px", { fontWeight: "500" }],
        "header-xs": ["12px", { fontWeight: "500" }],

        "paragraph-lg": ["20px", { fontWeight: "400" }],
        "paragraph-md": ["16px", { fontWeight: "400" }],
        "paragraph-sm": ["14px", { fontWeight: "400" }],
        "paragraph-xs": ["12px", { fontWeight: "400" }],
      },
      boxShadow: {
        standard: "0px 2px 3px 3px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
