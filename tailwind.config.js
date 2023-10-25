/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./public/**/*.{html}"],

  theme: {
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

      'tablet': '640px',
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
