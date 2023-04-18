module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: "#F50963",
        content: "#525258",
        title: "#03041C",
      },
      backgroundImage: {
        "home-banner": "url(/src/assets/imgs/banner-home.jpg)",
        "home-subcribe": "url(/src/assets/imgs/subcribe.jpg)",
        "about-banner": "url(/src/assets/imgs/banner-about.jpg)",
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
        sm: "1rem",
        lg: "2.5rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },

    screens: {
      ssm: "320px",
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
