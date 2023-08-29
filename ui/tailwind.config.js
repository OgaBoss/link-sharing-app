/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-ocd": '#633CFF',
        parme: '#beadff',
        blanc: '#EFEBFF',
        anthracite: '#333333',
        lave: '#737373',
        tendre: '#D9D9D9',
        'blanc-bleu': '#FAFAFA',
        rouge: '#FF3939',
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.875rem' }],
        base: ['1rem', { lineHeight: '2.5' }],
        lg: ['2rem', { lineHeight: '5rem' }],
      }
    },
  },
  plugins: [],
}

