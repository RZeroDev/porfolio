/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      inset: {
        '15p': '15%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
      },
      width: {
        '15p': '15%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
        '40p': '40%',
        '45p': '45%',
        '70p': '70%',
        '75p': '75%',
      },
      fontSize: {
        '6xl': '06rem',  
        '8xl': '08rem',
        '9xl': '09rem',  
        '10xl': '10rem',  
        '11xl': '12rem',  
        '12xl': '14rem',  
      },
      colors: {
        'custom-green': '#8fad00',
      },
      boxShadow: {
        'outline-text': '0 0 0 1px rgba(0, 0, 0, 0), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
      },
      rotate: {
        '-15': '-15deg',
        // Vous pouvez ajouter d'autres rotations personnalisées si nécessaire
      },
      lineHeight: {
        'extra-tight': '0.9',
        '12': '3rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-outline': {
          textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
        },
        '.text-shadow-outline_1': {
          textShadow: '-1px -1px 0 #8fad00, 1px -1px 0 #8fad00, -1px 1px 0 #8fad00, 1px 1px 0 #8fad00',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

