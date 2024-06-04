/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow': "#F4D04E",
        'black-custom': "#111111",
        'gray': "#7f7f7f",
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        'hard': "8px 8px black",
      },
    },
  },
  plugins: [],
}

