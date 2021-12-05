module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/images/bg-weather.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}