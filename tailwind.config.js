/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        lexend:["Lexend"],
        istock:["Istok+web"]
      },
    },
    colors: {
      blue1000:["#002147"],
      grad:["#000016"],
      feat:["#000034"],
      white:["#ffffff"],
      purple:["#490099"],
      blue200:["#CCD3DA"],
      arr:["#3D66FB"],
      gray:["#E5E9ED"],
      tert:["#9B8896"]
    },
  },
  plugins: [],
}

