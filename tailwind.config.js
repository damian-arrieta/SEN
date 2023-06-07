/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-uno': '#E6E47C',
        'color-dos': '#B8D3CC',
        'color-tres': '#C7C798',
        'color-cuatro': '#EFDCC9'
      }
    },
  },
  plugins: [],
}