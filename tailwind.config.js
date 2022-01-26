module.exports = {
  darkMode: 'class',
  content: [
    "./dist/**/*.{html,js}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008000",
        secondary: "#F8A317",
        "secondary-accent": "#FFC15B",
        "background-gray": "#1F2028",
        "background-gray-accent": "#2E3039",
        "background-gray-3": "#424657",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
}
