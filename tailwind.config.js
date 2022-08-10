/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        fem: {
          100: "hsl(10, 79%, 65%)",
          200: "hsl(186, 34%, 60%)",
          300: "hsl(25, 47%, 15%)",
          400: "hsl(28, 10%, 53%)",
          500: "hsl(27, 66%, 92%)",
          600: "hsl(33, 100%, 98%)",
        },
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
