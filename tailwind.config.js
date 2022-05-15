module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'light': '#D0D6F9',
      'dark': '#0B0D17',
    },
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    extend: {
      fontSize: {
        'heading-1': '150px',
        'heading-2': '100px',
        'heading-3': '56px',
        'heading-4': '32px',
        'heading-5': '28px',
        'sub-heading-1': '28px',
        'sub-heading-2': '14px',
        'nav-text': '16px',
        'body-text': '18px'
      }
    }
  },
  plugins: [],
}