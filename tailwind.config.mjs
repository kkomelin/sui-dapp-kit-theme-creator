/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
}
