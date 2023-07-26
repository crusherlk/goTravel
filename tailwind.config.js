/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--montserrat)",
        hind: "var(--hind)",
      },
      colors: {
        gtBlack: "#0F1014",
        gtBlue: "#3F53FE",
        gtGray: "#8D8D8D",
        gtDarkGray: "#3F3F3F",
      },
    },
  },
  plugins: [],
};
