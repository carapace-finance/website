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
          "0%, 100%": { transform: "tranlate(0, 0)" },
          "50%": { transform: "translate(10px, 0)" },
        },
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slide: "slide 1s ease-in-out infinite",
        "text-focus-in": "text-focus-in 2s ease-in",
        "slide-in-bottom":
          "slide-in-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};
