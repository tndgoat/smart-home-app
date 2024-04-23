/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screen/**/*.{js,jsx,ts,tsx}", "./src/component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: 'linear-gradient(rgba(35, 25, 23, 0.48), rgba(35, 25, 23, 0.48))',

      },
    },
  },
  plugins: [],
}

