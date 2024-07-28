/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: 'var(--sdktg-color-light)',
        dark: 'var(--sdktg-color-dark)',
      },
    },
  },
  plugins: [],
}
