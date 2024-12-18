module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate3d: {
          "0%": { transform: "rotateY(0deg)" },
          "25%": { transform: "rotateY(90deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "75%": { transform: "rotateY(270deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        rotate3d: "rotate3d 5s infinite linear",
      },
    },
  },
  plugins: [],
};
