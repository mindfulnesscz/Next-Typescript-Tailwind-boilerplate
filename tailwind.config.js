const colors = require('tailwindcss/colors');

module.exports = {
  //mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'aqua': ['"Aqua"', 'Arial', 'sans-serif'],
        'open': ['"Open"', 'sans-serif']
      }
    },
    colors: {

      transparent: 'transparent',
      current: 'currentColor',
      chestnut: {
        DEFAULT: '#582521',
      },
      dynairix: {
        DEFAULT: '#000',
        darkblue: '#0000ff',
        violet: '#007dff',
        lightblue: '#00f6ee',
        green: '#28fa6e'
      },
      gray: colors.neutral,
      white: colors.white,
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
