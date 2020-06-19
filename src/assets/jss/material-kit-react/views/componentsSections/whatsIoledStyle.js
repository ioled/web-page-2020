const ioledStyles = theme => ({
  gridContainer: {
    background: "#FFFFFF"
  },

  imageSection: {
    width: "100%",

    [theme.breakpoints.down("xs")]: { display: "none" },
    [theme.breakpoints.up("sm")]: { height: "325px", paddingTop: "0" },
    [theme.breakpoints.up("md")]: { height: "450px" },
    [theme.breakpoints.up("lg")]: { height: "500px" }
  },

  textSection: {
    background: "#FFFFFF"
  },

  textSectionTitle: {
    color: "#282321",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2em",
      paddingTop: "0.8em",
      paddingLeft: "1.5em"
    },
    [theme.breakpoints.up("sm")]: { fontSize: "1.8em", paddingTop: "1.5em" },
    [theme.breakpoints.up("md")]: { fontSize: "2em" },
    [theme.breakpoints.up("lg")]: { fontSize: "2em" }
  },

  textSectionParagraph: {
    textAlign: "justify",
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.85em",
      paddingTop: "0.8em",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingBottom: "1.5em"
    },
    [theme.breakpoints.up("sm")]: { fontSize: "0.85em", padding: "2em" },
    [theme.breakpoints.up("md")]: { fontSize: "1em", padding: "3em" },
    [theme.breakpoints.up("lg")]: { fontSize: "1em", padding: "4em" }
  }
});

export default ioledStyles;
