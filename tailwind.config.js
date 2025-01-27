/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        lexend:["Lexend"],
        istock:["Istok+web"],
        DMSans:["DM+Sans"]
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
      tert:["#9B8896"],
      blue500:["#8090A3"],
      blue400:["#99A6B5"], 
      purple400:["#160067"]
    },
  },
  plugins: [],
}

