/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#0B9826",
        simple: "#C778DD",
        complex: "#ABB2BF",
        background: "#282c33"
      },  
      fontFamily:{
        font:["Fira Code", "monospace"],
        poppins:["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

