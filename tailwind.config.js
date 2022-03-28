module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Ubuntu,Trebuchet MS,sans-serif"],
    },
    extend: {
      colors: {
        main: "rgba(15,177,175,1)",
        blue: "rgb(42,132,227,1)",
        "text-color": "#334b65",
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
