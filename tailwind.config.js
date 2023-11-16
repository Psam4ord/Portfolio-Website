/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./public/**/*.{html}"],

  theme: {

    colors : {
      'bgPrimary':"#F0F0F0",
      'bgSecondary':"#0f172a",
      'btnPrimary':'#1da1f2',
      'btnHover': '#89CFF3 ',
      'cardColor': '#F8F6F4'
    },
    screens: {
      'xsm': '320px',
      //extra small phones
      // => @media (min-width: 320px) { ... }

      'sm': '360px',
      //small phones 
      // => @media (min-width: 360px) { ... }
      
      'md': '425px',
      //medium  phones
      // => @media (min-width: 425px) { ... }

      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
