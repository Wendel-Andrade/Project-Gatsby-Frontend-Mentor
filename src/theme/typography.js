import Typography from "typography";

const typography = new Typography({
  title: "Gatsby-project",
  baseFontSize: "10px", // base 1rem = 10px
  baseLineHeight: 1.5,
  headerWeight: 700,
  headerFontFamily: [
    "Bellefair",
    "-apple-system",
    "BlinkMacSystemFont",
    "Times",
    "serif"
  ],
  bodyFontFamily: [
    "Barlow",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif"
  ]
});

export default typography;