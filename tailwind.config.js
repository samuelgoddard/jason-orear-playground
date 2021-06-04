module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}',],
  darkMode: false,
  theme: {
    fontFamily: {
      'display': ['Albert', 'Arial', 'sans-serif'],
      'sans': ['NeueHaasUnica', 'Arial', 'sans-serif'],
      'mono': ['Space Mono', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#2E2E2E',
        'white': '#FFF',
        color: {
          light: '#ffb288',
          default: '#d18d67',
          dark: '#ce8860',
        },
      }
    },
  },
  variants: {
    extend: {},
  }
}