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
      screens: {
        'xl': '1440px',
      },
      fontSize: {
        '12-14px': "clamp(0.75rem, 0.706rem + 0.1878vw, 0.875rem)",
        '14-16px': "clamp(0.875rem, 0.831rem + 0.1878vw, 1rem)",
        '20-24px': "clamp(1.25rem, 1.162rem + 0.3756vw, 1.5rem)",
      },
    },
  },
  plugins: [],
}

