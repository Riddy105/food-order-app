//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#8a2b06",
          100: "#4d1601",
          200: "#ad5502",
        },
        grey: {
          50: "#3f3f3f",
          100: "#383838",
          200: "#ccc",
        },
      },
    },
    boxShadow: {
      custom: "0 1px 18px 10px rgb(0 0 0 / 25%)",
    },
  },
  plugins: [],
};
