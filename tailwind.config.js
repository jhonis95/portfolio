/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      main:'#278DA5',
      default:'#FFFFFF',
      dark:'#000000',
      main_l1:'#45A2B8',
      main_l2:'#70BED0',
      main_d1:'#067E9A',
      main_d2:'#035F74'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'audiowide':['Audiowide', 'sans-serif'],
        'montserrat':['Montserrat Subrayada', 'sans-serif'],
        'merienda':['Merienda','cursive'],
        'play':['Play','sans-serif'],
        'changa':['Changa One','sans-serif']
      },
    },
  },
  plugins: [],
}

