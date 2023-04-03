/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'scissors-gradient': 'linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))'
      },
      colors:{
       ' DarkText': 'hsl(229, 25%, 31%)'
      }
    }
    
  },
  plugins: [],
}

