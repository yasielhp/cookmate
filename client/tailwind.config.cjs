/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        White: '#FFFFFF',
        Gray: '#333333',
        Orange: '#FFA000',
        Green: '#00A65A',
        Red: '#C10000'
      }
    }
  },
  plugins: []
}
