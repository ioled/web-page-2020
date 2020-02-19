const informationParametersStyles = theme => ({
  gridContainer: {
    background: "#FFFFFF",
    padding: "2em"
  },

  gridItemTitle: {
    display: "flex",
    alignItems: "center",
    color: "#282321",
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {}
  },

  imageCloud: {
    width: "45px",
    margin: "1em"
  },

  imageTimer: {
    width: "40px",
    margin: "1em"
  },

  imageLightning: {
    width: "20px",
    margin: "1em"
  },

  imageTemperature: {
    width: "20px",
    margin: "1em"
  },

  gridItem: {
    margin: "1em",
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {}
  },

  titleGridItem: {}
});

export default informationParametersStyles;

// [theme.breakpoints.down("xs")]: {},
// [theme.breakpoints.up("sm")]: {},
// [theme.breakpoints.up("md")]: {},
// [theme.breakpoints.up("lg")]: {}
