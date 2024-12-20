/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white100: "#F4F4F4",
        white200: "#F1F3F4",
        white300: "#EDEDED",
        white400: "#E8E8E8",
        gray100: "#D9D9D9",
        gray200: "#B0B0B0",
        gray300: "#B4B4B4",
        gray400: "#8B8B8B",
        gray500: "#383838",
        silver: "#CEE1EA",
        blue200100: "#5FD0FF",
        blue200: "#0097D6",
        blue300: "#00354B",
        blue400: "#001A25",
        green100: "#37D7B5",
        green200: "#00A17F",
        red: "#E41818",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}