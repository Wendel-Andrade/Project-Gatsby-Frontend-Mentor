import Typography from "typography";

const typography = new Typography({
  title: "NameProject",
  baseFontSize: "10px", // base 1rem = 10px
  baseLineHeight: 1.5,
  headerWeight: 700,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
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