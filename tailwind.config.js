/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        mobMenu: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        mobMenu: "mobMenu 200ms ease 1",
      },
    },
  },
  plugins: [],
};
