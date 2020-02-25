const informationParametersStyles = theme => ({
  gridContainer: {
    background: "#FFFFFF",
    padding: "2em",
    [theme.breakpoints.down("xs")]: { padding: "0 1em" }
  },

  flexItemTitle: {
    display: "flex",
    alignItems: "center",
    color: "#282321"
  },

  imageCloud: {
    width: "45px",
    margin: "1em",
    transition: "transform .4s ease",
    "&:hover": {
      transform: "scale(1.5)"
    }
  },

  imageTimer: {
    width: "40px",
    margin: "1em",
    transition: "transform .4s ease",
    "&:hover": {
      transform: "scale(1.5)"
    }
  },

  imageLightning: {
    width: "20px",
    margin: "1em",
    transition: "transform .4s ease",
    "&:hover": {
      transform: "scale(1.5)"
    }
  },

  imageTemperature: {
    width: "20px",
    margin: "1em",
    transition: "transform .4s ease",
    "&:hover": {
      transform: "scale(1.5)"
    }
  },

  title: {
    marginLeft: "0.5em",
    [theme.breakpoints.up("xs")]: { fontSize: "0.9em" },
    [theme.breakpoints.up("sm")]: { fontSize: "1.1em" },
    [theme.breakpoints.up("md")]: { fontSize: "1.3em" },
    [theme.breakpoints.up("lg")]: { fontSize: "1.5em" }
  },

  gridItem: {
    margin: "1em"
  },

  gridItemParagraph: {
    textAlign: "justify",
    [theme.breakpoints.up("xs")]: { fontSize: "0.85em" },
    [theme.breakpoints.up("sm")]: { fontSize: "0.85em" },
    [theme.breakpoints.up("md")]: { fontSize: "1em" },
    [theme.breakpoints.up("lg")]: { fontSize: "1em" }
  }
});

export default informationParametersStyles;
