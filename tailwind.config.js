/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bxs-buttom' : '0 0 0 2px #ffffff, 0 0 0 4px #f97316, 0 1px 2px 0 rgb(0, 0, 0)'
      }
    },
  },
  plugins: [],
}

