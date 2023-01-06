const colors = require('tailwindcss/colors')

module.exports = {

  content: ["./src/**/*.{html,js}"],
  
  purge: [],
  
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {},

    colors: {
    
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      fucsia:colors.fuchsia,
      rose:colors.rose,
      lila:colors.purple,
      sky:colors.sky,
      cyan:colors.cyan,
      teal:colors.teal,
      lime:colors.lime,
      orange:colors.orange,
      amber:colors.yellow
    }

  },
  
  variants: {
    extend: {},
  },
  
  plugins: [],

}
