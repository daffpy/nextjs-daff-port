/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        stussy: ['STUSSY', 'cursive'],
        gaegu:['Gaegu',"cursive"],
        htiny:['HEYTINY',"cursive"],
        outfit:['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
