/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main-teal': '#39B5CB',
        'secondary-teal': '#34E3CE',
        'main-dark': '#363636',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: [],
}
