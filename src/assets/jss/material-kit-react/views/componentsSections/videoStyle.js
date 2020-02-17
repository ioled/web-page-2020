const videoStyle = theme => ({
  sectionVideoContainer: {
    backgroundColor: "#FFFFFF",
    paddingTop: "2.2em",
    paddingBottom: "2.2em"
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
      fontSize: "1.6em"
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
    padding: "0 1em"
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
