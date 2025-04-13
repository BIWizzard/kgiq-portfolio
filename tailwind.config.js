/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
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
        'kg-wine': '#733041'
      },
    },
  },
  plugins: [],
  // 👇 Optional: If using a custom safelist
  safelist: [
    'rounded-xl',
    'shadow-xl',
    'border',
    'border-white/10',
    'hover:border-white/20',
    'bg-white/10',
    'bg-gradient-to-br',
    'from-blue-500/10',
    'to-green-500/10',
    'text-sunglow',
    'backdrop-blur-md',
    'hover:shadow-2xl',
  ],
}
