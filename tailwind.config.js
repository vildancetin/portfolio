/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      orange: "#fd853a",
      "light-orange":"#fecc94",
      "green-light": "#ccf381",
      white: "#ffffff",
      blue: "#4831D4",
      gray: "#939393",
      "gray-light": "#c6c6c6",
      "extra-light-gray":"#f5f5dc",
      "dark-toggle":"#D9D9D9"
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  darkMode:"class",
  plugins: [

  ],
};
