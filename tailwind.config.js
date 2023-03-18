/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6B58E4',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
