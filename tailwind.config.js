/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ed3946',
        secondary: '#e0e2e5',
      },
      backgroundImage: {
        'pokemon-bg': "url('@/assets/background.svg')",
      }
    },
  },
  plugins: [],
}

