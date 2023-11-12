/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#0C0D11',
        'secondary': '#1E1E1E',
        'tertiary':'#ECEBEB',
        'accent':'#ADFDF6',
        'grass':'#238636',
      }
    },
  },  
  plugins: [],
}
