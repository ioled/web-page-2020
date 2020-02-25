const videoStyle = theme => ({
  sectionVideoContainer: {
    backgroundColor: "#FFFFFF",

    borderTop: "1px solid #121211",
    borderBottom: "1px solid #121211",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "1em",
      paddingBottom: "1em"
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.6em",
      paddingBottom: "1.6em"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2.2em",
      paddingBottom: "2.2em"
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "2.2em",
      paddingBottom: "2.2em"
    }
  },

  titleContainer: {
    marginBottom: "0.5em",
    marginLeft: "auto !important",
    marginRight: "auto !important",
    maxWidth: "770px",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "6%"
    }
  },

  videoTitle: {
    color: "#282321",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2em"
    }
  },

  videoContainer: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
    maxWidth: "800px",

    [theme.breakpoints.up("xs")]: { padding: "0 2em" },
    [theme.breakpoints.up("sm")]: { padding: "0 4em" },
    [theme.breakpoints.up("md")]: { padding: "0 3em" },
    [theme.breakpoints.up("lg")]: { padding: "0 0" }
  },

  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%",
    width: "100%"
  },

  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0",
    overflowY: "hidden"
  }
});

export default videoStyle;
