/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
     extend: {},
  },
  plugins: [require('tailwindcss-motion'),
            require('tailwindcss-intersect') 
  ], 
};