module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'lg': { 'min': '1024px', 'max': '1215px' },
        'md': { 'min': '672px', 'max': '1023px' },
        'sm': { 'max': '671px' }
      },
      colors: {
        'cor1': '#E97503',
        'cor2': '#F09802',
        'cor3': '#FDD303',
        'cardTitle': '#343434',
        'cardSubtitle': '#343434',
        'backgroundHeader': '#2F3D49',
        'hero-section-text-color': '#2F3D49',
        'section-title-text-color': '#2F3D49',
        'background-home-main-content': '#f5f5f5',
        'background-footer': '#10151B'
      },
      backgroundImage: {
        'gradient-principal': 'linear-gradient(94.25deg, #E97503 0%, #F09802 51.04%, #FDD303 100%)',
        'gradient-principal-hover': 'linear-gradient(88.11deg, #E97503 0%, #F09802 19.78%, #FDD303 100%)',
        'hero-section-gradient': 'linear-gradient(94.25deg, #E97503 0%, #F09802 51.04%, #FDD303 100%)'
      },
      boxShadow: {
        'card-shadow': '0px 0px 12px rgba(0, 0, 0, 0.35)',
        'img-wrapper': '0px 4px 12px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
