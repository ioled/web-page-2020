const footerStyles = theme => ({
  gridContainer: {
    background: "#121211"
  },

  gridItem: {
    padding: "1em",
    marginRight: "2em"
  },

  titleGridItem: {
    color: "#FFFFFF",

    textAlign: "left",
    paddingTop: "1em",
    paddingBottom: "0.5em",
    borderBottom: "2px solid #FFFFFF",
    [theme.breakpoints.down("xs")]: { fontSize: "0.7em" },
    [theme.breakpoints.up("sm")]: { fontSize: "0.7em" },
    [theme.breakpoints.up("md")]: { fontSize: "0.8em" },
    [theme.breakpoints.up("lg")]: { fontSize: "0.9em" }
  },

  footerList: {
    color: "#FFFFFF",
    padding: "0",
    "& li": {
      paddingBottom: "0.2em",
      listStyleType: "none",

      "& a": {
        color: "#FFFFFF",
        cursor: "pointer",
        [theme.breakpoints.down("xs")]: { fontSize: "0.7em" },
        [theme.breakpoints.up("sm")]: { fontSize: "0.7em" },
        [theme.breakpoints.up("md")]: { fontSize: "0.8em" },
        [theme.breakpoints.up("lg")]: { fontSize: "0.9em" },

        "&:hover": {
          borderBottom: "1px solid white"
        }
      }
    }
  },

  liWithIcon: {
    display: "flex",
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: { fontSize: "0.7em" },
    [theme.breakpoints.up("sm")]: { fontSize: "0.7em" },
    [theme.breakpoints.up("md")]: { fontSize: "0.8em" },
    [theme.breakpoints.up("lg")]: { fontSize: "0.9em" }
  },
  iconElement: {
    marginRight: "8px"
  }
});

// [theme.breakpoints.down("xs")]: {},
// [theme.breakpoints.up("sm")]: {},
// [theme.breakpoints.up("md")]: {},
// [theme.breakpoints.up("lg")]: {}

export default footerStyles;
