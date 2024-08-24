/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: 'Merriweather, ui-serif',
        poppins: 'Poppins, ui-serif',
      }



    },
  },
  plugins: [
    require('daisyui'),
  ],
}
