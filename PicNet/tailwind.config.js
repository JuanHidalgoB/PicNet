/** @type {import('tailwindcss').Config} */
export default {


  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'pacifico': ['Pacifico']
    },
    extend: {
      colors: {
        rosa: {
          100:"#FF9B71",
          200:"#E18861"
        }
      },
    },
  },
  plugins: [],
};
