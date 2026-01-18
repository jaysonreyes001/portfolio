/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    "translate-y-0",
    "translate-y-1",
    "translate-y-2",
    "translate-y-3",
    "translate-y-4",
    "translate-y-5",
    "translate-y-6",
    "translate-y-10",
    "translate-y-20",
    "translate-y-30",
    "translate-y-40",
    "translate-y-50",
    "-translate-y-10",
    "-translate-y-20",
    "-translate-y-30",
    "-translate-y-40",
    "-translate-y-50",
    "translate-y-full",
    "translate-x-0",
    "translate-x-1",
    "translate-x-2",
    "translate-x-3",
    "translate-x-4",
    "translate-x-5",
    "translate-x-6",
    "translate-x-10",
    "translate-x-20",
    "translate-x-30",
    "translate-x-40",
    "translate-x-50",
    '-translate-x-10',
    '-translate-x-20',
    '-translate-x-50',
    "translate-x-full",
    'opacity-0',
    'opacity-1'
  ],
  theme: {
    extend: {
      keyframes: {
        appearleft: {
          from: {
            opacity: "0",
            transform:"translateX(50px)"
          },
          to: {
            opacity: "1",
            transform:"translateX(0)"
          },
        },
        appearright: {
          from: {
            opacity: "0",
            transform:"translateX(-50px)"
          },
          to: {
            opacity: "1",
            transform:"translateX(0)"
          },
        },
       },
       animation: {
          appearleft: "appearleft .5s ease-in-out",
          appearright: "appearright .5s ease-in-out",
       },
      fontFamily: {
        // Adds 'font-space' class
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-background': 'radial-gradient(circle at right top, rgba(238,102,17,0.1), transparent 80%)',
        'radial-background-light': 'radial-gradient(circle at right top, rgba(214, 40, 40, 0.1), transparent 70%)',
      },
      colors: {
        primary:{
          dark:'#ee6611',
          light:'#d62828'
        },
        secondary:{
          dark:"#d1d5db",
          light:"#ffffff"
        },
        background:{
          dark:"#0A0A0A",
          light:"#f1f1f1"
        },
        neutral:{
          dark:"#141414",
          light:"#ffffff"
        }
      },
    },
  },
  plugins: [],
}

