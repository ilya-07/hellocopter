/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lin: "linear-gradient(101.9deg, #6477DD 7.67%, #C753C1 52.66%, #DC1DC3 93.7%)",
        gr: "#02E502",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
