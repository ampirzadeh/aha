const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './views/**/*.pug'],
  theme: {
    fontFamily: {
      iran: ['"IRANSansWeb"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
