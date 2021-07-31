module.exports = {
  purge: ['./public/**/*.html', './pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#555555',
    },
    extend: {
      colors: {
        primary: '#092237',
        secondary: '#6a4928',
        accent: '#4977bc',
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif', 'system-ui'],
      },
      letterSpacing: {
        extrawide: '.5em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
