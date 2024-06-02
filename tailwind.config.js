/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      colors : {
        gray  : '#5A5959',
        black : '#323334',
        white : ' #FFFFFF ',

      },
    },
  },
  plugins: [],
}  ;