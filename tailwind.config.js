module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#37CDBE",
          secondary: "#36D399",
          accent: "#FBBD23",
          neutral: "#3D4451",
          base: "#FFFFFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
