/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kg-blue': '#304c72',
        'kg-gray': '#59708e',
        'kg-yellow': '#ffd166',
        'kg-green': '#c5e6a6',
        'kg-green2': '#bdd2a6',
        'kg-ash': '#b9bea5',
        'kg-ash2': '#a7aaa4',
        'kg-wine': '#733041',
      }
    }
  },
  plugins: [],
}
