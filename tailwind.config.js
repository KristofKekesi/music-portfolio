const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./styles/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['var(--font-spaceGrotesk)', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        'tag-violet': '0 0 5px rgb(124 58 237 / 0.75)',
        'tag-fuschia': '0 0 5px rgb(192 38 211 / 0.75)',
      }
    },
  },
  plugins: [],
}