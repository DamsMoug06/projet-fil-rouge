/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0BC6E3',
        'brand-secondary': '#09A8D4',
        'bg-dark-bg': '#1a202c',
        'light-text': '#edf2f7',
        'medium-text': '#a0aec0',
      }
    },
  },
  plugins: [],
}