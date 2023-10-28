const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'primary': "#af4f6b",
        'secondary': "#fdd4c2",
        'secondary-dark': '#cca177',
        'primary-dark': '#2d2d2d',
        'accent': '#8aacad',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        questrial: "Questrial",
        roboto: "Roboto",
      }
    },
  }

}