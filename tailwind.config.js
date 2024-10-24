/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e70616",
        primaryHover: "#e70751",
        bgPrimary: "#212121",
      },
    },
  },
  plugins: [],
};
