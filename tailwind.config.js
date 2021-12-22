const colors = require('tailwindcss/colors');

module.exports = {
  //mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'source-serif': ['"Source Serif Pro"', 'ui-serif', 'Georgia']
      }
    },
    colors: {

      transparent: 'transparent',
      current: 'currentColor',
      chestnut: {
        DEFAULT: '#582521',
      },
      tan: {
        dark: '#F2EBE2',
        DEFAULT: '#FFFAF2',
      },
      gray: colors.trueGray,
      white: colors.white,
      red: colors.red
    }

  },
  inset: {
    '4': '1rem',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
