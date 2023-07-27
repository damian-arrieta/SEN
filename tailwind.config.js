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
        'vanilla': '#EFDCC9',
        'white': '#ffffff',
      },
      boxShadow: {
        before: '-10px 10px 0 #ffffff',
        before2: '-10px -10px 0 #ffffff',
        after: '-10px 10px 0 #ffffff',
        after2: '-10px 10px 0 #232949'
      }
    },
  },
  plugins: [],
}