/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        jersey: ["Jersey 10", "sans-serif"],
        justanotherhand: ["Just Another Hand", "sans-serif"],
        shadows: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [],
};
