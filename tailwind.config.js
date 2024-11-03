/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: ["#56b3b0"],
        bg2: ["#167e7c"],
        bg3: ["#000"]
      },
    },
    fontSize: {
      sm: ['1vw'],
      base: ['2vw'],
      lg: ['5vw'],
      xl: ['6vw'],
  },
  plugins: [],
}}

