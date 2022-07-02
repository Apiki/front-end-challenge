/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  fontFamily: {
    sans: 'Montserrat, sans-serif',
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': 'url(https://apiki.com/wp-content/uploads/2021/04/sparkles-.png)',
      },
      colors: {
        // Lighter Blue
        cyan: {
          500: '#66F6FF'
        },
        // Main blue
        blue: {
          500: '#009CDE'
        },
        // 900 - Background | 800 - Bg Cards | 500 - Dividers/Selected Itens | 200 - Secondary Text
        gray: {
          900: '#141414',
          800: '#121214',
          500: '#323238',
          200: '#67666A',
        },
        // White text-color type
        zinc: {
          100: '#E1E1E6',
        },
        // Yellow and orange colors
        orange: {
          100: '#FDD00A',
          500: '#F57E14',
        }
      },
    },
  },
  plugins: [],
};
