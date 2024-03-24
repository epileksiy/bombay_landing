/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sapphire: ["sapphire", "sans-serif"],
        bombay: ["bombay", "sans-serif"]
      },
    },
  },
  plugins: [],
};

