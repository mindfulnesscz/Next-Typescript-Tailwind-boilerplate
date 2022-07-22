const colors = require('tailwindcss/colors');

module.exports = {
  //mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'open': ['"Open"', 'sans-serif']
      }
    },
    colors: {
      webmind: {
        DEFAULT: '#0032ff',
        light: '#00acff',
      },
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
