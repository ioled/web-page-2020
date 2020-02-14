const videoStyle = theme => ({
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  titleContainer: {
    margin: "1em",
    textAlign: "center"
  },

  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%"
  },

  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0"
  },

  videoContainer: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
    maxWidth: "800px",
    paddingRight: "2em",
    paddingLeft: "2em"
  },

  typography: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.8em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em"
    }
  }
});

export default videoStyle;
