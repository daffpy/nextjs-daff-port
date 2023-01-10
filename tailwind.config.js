/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        "dark-indo-bg": 'linear-gradient(to right, rgba(14, 17, 22, 0.99), rgba(0, 0, 0, 0.82), rgba(14, 17, 22, 0.99)), url("https://i.ibb.co/ChJLtRL/Flag-of-Indonesia.png");',
        "indo-bg":'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.95)), url("https://i.ibb.co/ChJLtRL/Flag-of-Indonesia.png");',
        "dark-wa-bg": 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.80)), url("https://raw.githubusercontent.com/Xetera/xetera.dev/master/content/assets/whatsapp_background.png");',
        "wa-bg": 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.80)), url("https://raw.githubusercontent.com/Xetera/xetera.dev/master/content/assets/whatsapp_background.png");'

      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        stussy: ['STUSSY', 'cursive'],
        htiny:['HEYTINY',"cursive"],
        outfit:['Outfit', 'sans-serif'],
        caveat:['Caveat', 'cursive']

      },
      gridTemplateColumns:{
        'whatsapp':'fit-content(1000px) auto;'
      },
    },
  },
  plugins: [
  ],
}
