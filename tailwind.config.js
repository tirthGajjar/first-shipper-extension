/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  mode: "jit",
  darkMode: "class",
  content: ["./*.tsx", "./**/*.tsx"],
  plugins: []
}