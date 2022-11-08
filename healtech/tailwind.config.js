/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary_yellow: "#FEC846",
        primary_blue: "#3C68FF",
        secondary_blue: "#3BC9FB",
        primary_font: "#011637",
        secondary_font: "#000000",
      },
      animation: {
        blob: "blob 3s infinite",        
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(-50px, -10px)  scale(1) rotate(50deg)",
          },
          "33%": {
            transform: "translate(70px, 100px) scale(1.1) rotate(40deg)",
          },
          "66%": {
            transform: " translate(-70px, -100px) scale(0.9) rotate(30deg)",
          },
          "100%": {
            transform: " translate(-50px, -10px) scale(1) rotate(50deg)",
          },
        },
      },
    },
  },
  plugins: [],
}
