/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["extra-font"],
        squid: ["squid-font"],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "12rem",
        "13xl": "15rem",
      },
      backgroundColor: {
        main: "",
      },
    },
  },
  plugins: [],
};
