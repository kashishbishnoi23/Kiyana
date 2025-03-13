/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './Ethnic/ethnic.html', './AboutUs.html','./cart.html'],
  theme: {
    extend:{
      fontSize:{
        'custom-xl': '50px',
        'caption-grey': '#40414A',
        'custom-2xl': '70px',
        'custom-lg':'45px',
        'custom-sm':'20px',
        
      },
      padding:{
        'caption_padding':'45px'
      },
      screens: {
        'mobile': { max: '999px' },   // Targets screens ≤ 999px
        'tablet': '1000px',           // Targets screens ≥ 1000px
        'large': '1500px',            // Targets screens ≥ 1500px
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

