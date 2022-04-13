const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Bebas: ["bebas-neue-pro", ...defaultTheme.fontFamily.sans],
      BebasExtraBold: ["bebas-neue-pro-expanded", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "gray-dynamo": {
          50: "#F9FAFB",
          100: "#F3F5F6",
          200: "#E7EBEE",
          300: "#DCE2E5",
          400: "#D0D8DD",
          500: "#C4CED4",
          600: "#95A7B2",
          700: "#677F8E",
          800: "#45555E",
          900: "#222A2F",
        },
        orange: {
          50: "#FFF0E5",
          100: "#FFE1CC",
          200: "#FFC499",
          300: "#FFA666",
          400: "#FF8833",
          500: "#FF6900",
          600: "#CC5500",
          700: "#994000",
          800: "#662B00",
          900: "#331500",
        },
        "black-dynamo": {
          50: "#E0E8F0",
          100: "#C2D1E0",
          200: "#85A3C2",
          300: "#4E759C",
          400: "#30475F",
          500: "#101820",
          600: "#0E141B",
          700: "#0A0F14",
          800: "#070A0E",
          900: "#030507",
        },
      },
    },
  },
  plugins: [],
};
