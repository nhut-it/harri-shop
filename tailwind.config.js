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
        "grow-up": {
          "0%": { opacity: 1, transfrom: "scale(1)" },
          "100%": { opacity: 0, transfrom: "scale( 0 )" },
        },
      },
      animation: {
        "rotate-plus": "rotate-plus .3s linear",
        "grow-up": "grow-up .5s linner infinite",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
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
