/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkgreen': '#16423c',
        'lightgreen': '#6A9C89',
        'neutralgreen': '#c4dad2',
        'neutral': '#E9EFEC',
      },
    },
  },
  plugins: [],
}

