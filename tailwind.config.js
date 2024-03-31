/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'shiny': "url('./src/assets/images/background.svg')",
      },
      colors: {
        'primary-blue': '#133960',
      }
    },
  },
  plugins: [],
}

