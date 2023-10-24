/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // extra-small-phones
      'xSmall': '320px',
      // => @media (min-width: 320px) { ... }

      // small-phones
      'Small': '360px',
      // => @media (min-width: 360px) { ... }

      //medium-phones
      'medium': '425px',
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