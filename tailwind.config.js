module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
    light: 'rgb(103 232 249)',
        },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}

