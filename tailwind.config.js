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
        'hard-mobile': "8px 8px black",
        'hard-desktop': "16px 16px black",
      },
      backgroundImage: {
        'illustration': "url('./public/images/illustration-article.svg')",
      },
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}

