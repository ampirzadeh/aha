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
  plugins:
    process.env.NODE_ENV === 'production'
      ? []
      : [require('tailwindcss-debug-screens')],
}
