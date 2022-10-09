/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ["Source Sans Pro", "sans-serif"],
      'mono': ['IBM Plex Mono', 'monospace'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        bgGray: '#F7F7FB',
        yellow: {
          "50": "#FFFDEB",
          "100": "#FEFAD7",
          "200": "#FEF5AA",
          "300": "#FDF181",
          "400": "#FDEC59",
          "500": "#FCE72D",
          "600": "#ECD503",
          "700": "#B09F02",
          "800": "#746802",
          "900": "#3C3601"
        }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background": "url(/static/hero-image.png) no-repeat",
          "background-size": "cover",
          "background-position": "bottom",
          // "max-height": "800px",
        }
      }

      addUtilities(utilities)
    }),
  ],
};
