const ioledStyles = theme => ({
  gridContainer: {
    background: "#FFFFFF",
    [theme.breakpoints.up("xs")]: { borderTop: "1px solid #282321" },
    [theme.breakpoints.up("sm")]: { borderTop: "none" }
  },

  imageSection: {
    width: "100%",

    [theme.breakpoints.down("xs")]: { display: "none" },
    [theme.breakpoints.up("sm")]: { height: "325px", paddingTop: "0" },
    [theme.breakpoints.up("md")]: { height: "450px" },
    [theme.breakpoints.up("lg")]: { height: "500px" }
  },

  textSection: {
    background: "#FFFFFF",

    borderBottom: "1px solid #282321",
    [theme.breakpoints.up("sm")]: { borderTop: "1px solid #282321" }
  },

  textSectionTitle: {
    color: "#282321",

    paddingLeft: "1.5em",
    [theme.breakpoints.up("xs")]: { fontSize: "1.6em", paddingTop: "0.8em" },
    [theme.breakpoints.up("sm")]: { fontSize: "1.8em", paddingTop: "1.5em" },
    [theme.breakpoints.up("md")]: { fontSize: "2em" },
    [theme.breakpoints.up("lg")]: { fontSize: "2em" }
  },

  textSectionParagraph: {
    [theme.breakpoints.up("xs")]: { fontSize: "0.85em", padding: "1.5em" },
    [theme.breakpoints.up("sm")]: { fontSize: "0.85em", padding: "2em" },
    [theme.breakpoints.up("md")]: { fontSize: "1em", padding: "3em" },
    [theme.breakpoints.up("lg")]: { fontSize: "1em", padding: "4em" }
  }
});

export default ioledStyles;
