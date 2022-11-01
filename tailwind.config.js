/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonPink: "#FF5896",
        buttonPinkHover: "#FF2576",
        textPinkHover: "#FF0C66",
        customDarkBlue: "#161C2E",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%, 100%" : {transform : "tranlate(0, 0)" },
          "50%" : {transform : "translate(10px, 0)"},
        },
      },
      animation: {
        "slide": "slide 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
