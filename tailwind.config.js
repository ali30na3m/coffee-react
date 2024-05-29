/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0 1px 10px 0 rgba(0, 0, 0, 0.05)"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMadium": "Dana Madium",
        "DanaDemiBold": "Dana DemiBold",
        "Morabba": "Morabba",
        "MorabbaLight": "Morabba Light",
        "Morabba Bold": "Morabba Bold"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        },
      },

      backgroundImage: {
        "home-mobile" : "url(../public/Images/headerBgMobile.webp)",
        "home-Desktop" : "url(../public/Images/headerBgDesktop.webp)"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}