/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lemon': '#E6E47C',
        'teal': '#B8D3CC',
        'olive': '#C7C798',
        'vanilla': '#EFDCC9'
      }
    },
  },
  plugins: [],
}