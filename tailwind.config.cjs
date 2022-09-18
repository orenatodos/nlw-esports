const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxyBg: 'url(/galaxy-background.png)',
        mainGradient:
          'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        gameGradient:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        skeletonGradient:
          'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)'
      },
      colors: {
        primary: colors.violet,
        secondary: colors.zinc,
        danger: colors.red
      }
    }
  }
}
