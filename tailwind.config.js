module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#F72C79",
        content: "#525258",
      },
      keyframes: {
        "rotate-plus": {
          "0%": { transfrom: "rotate(0)" },
          "100%": { transfrom: "rotate(45deg)" },
        },
      },
      animation: {
        "rotate-plus": "rotate-plus .3s linear",
      },
    },
    container: {
      padding: "30px",
    },

    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",
    },
  },
  plugins: [],
};
