/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1152px',
        'xl': '1440px',
        '2xl': '1920px'
      },
      fontFamily: {
        'm-plus-1': "'M PLUS 1 Code', sans-serif;"
      },
    },
  },
  plugins: [],
}

