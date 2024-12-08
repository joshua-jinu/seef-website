/** @type {import('tailwindcss').Config} */
import tailwindcssTextshadow from 'tailwindcss-textshadow'

const scrollbar = require("tailwind-scrollbar")
export default {
  content: [
    "./index.html",
    "./src/**/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : "Poppins",
        rubik : "Rubik",
        palatino : "Merriweather",
        roboto : "Roboto",
      },
      colors:{
        'darkgreen': '#16423c',
        'lightgreen': '#6A9C89',
        'neutralgreen': '#c4dad2',
        'neutral': '#E9EFEC',
      },
      textShadow: {
        white: '3px 3px 0px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [
    scrollbar,
    tailwindcssTextshadow
  ],
}

