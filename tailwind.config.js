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
      purple400:["#160067"],
      blue300:["#B2BCC8"],
      gray200:["#D9D9D9"],
      purple200:["#00004D"],
      black:["#000000"],
      purple900:["#00002F"],
      grey600:["#4F3C4A"],
      red:["#E33629"],
      green:["#319F43"],
      pink:["#AF029E"],
      purple100:["#6200B3"],
      blue700:["#4D647E"],
      lightBlue:["#17B3EB"],
      purple300:["#2F0080"],
      orange:["#E34E09"]
    },
  },
  plugins: [],
}

