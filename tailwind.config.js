/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: {
        lighter: colors.slate[400],
        light: colors.slate[600],
        DEFAULT: colors.slate[700],
        dark: colors.slate[900],
      },
      primary: {
        light: colors.orange[300],
        DEFAULT: colors.orange[500],
        dark: colors.orange[600],
      },
      secondary: {
        light: colors.blue[300],
        DEFAULT: colors.blue[500],
        dark: colors.blue[700],
      },
      state: {
        success: colors.green[500],
        warning: colors.yellow[500],
        danger: colors.red[500],
      },
    },
    extend: {
      minWidth: {},
      maxWidth: {},
      minHeight: {},
      maxHeight: {},
    },
  },
}
