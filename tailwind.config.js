/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', 'serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#D32F2F",



          "secondary": "#7D4443",



          "accent": "#727272",



          "neutral": "#E7E7E7",



          "base-100": "#1D1D1D",



          "info": "#3369D7",



          "success": "#22BFAF",



          "warning": "#F9C153",



          "error": "#F16C5B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

