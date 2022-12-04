/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        corsaGrotesk: ["var(--font-corsa-grotesk)"],
      },
      colors: {
        bgDark: "#171414",
      },
      screens: {
        desktop: "1170px",
      },
    },
  },
  plugins: [],
};
