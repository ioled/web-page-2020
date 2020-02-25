import image1 from "assets/img/ioled-banner.png";

const headerStyle = theme => ({
  header: {
    backgroundImage: `url(${image1})`,

    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("xs")]: {
      height: "190px",
      backgroundSize: "100% 190px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "350px",
      backgroundSize: "100% 350px"
    },
    [theme.breakpoints.up("md")]: {
      height: "450px",
      backgroundSize: "100% 450px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
      backgroundSize: "100% 500px"
    }
  },

  titleBox: {
    padding: "0.3em",
    borderRadius: "30px",
    background: "rgba(42, 42, 42, 0.1)"
  },

  title: {
    color: "white",
    display: "block",
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "90px",
      fontSize: "0.8em",
      margin: "0 2.5em"
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "163px",
      fontSize: "1.1em"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "210px",
      fontSize: "1.5em"
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "233px",
      fontSize: "2em"
    }
  },

  buttonBox: {
    display: "flex",
    paddingTop: "1em",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "0.5em"
    },

    [theme.breakpoints.up("sm")]: {
      paddingTop: "0.8em"
    }
  },

  button: {
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "30px",
    color: "white",
    background: "transparent",
    verticalAlign: "middle",

    "&:hover": {
      color: "#00EAA6",
      borderColor: "#00EAA6",
      background: "transparent"
    },

    [theme.breakpoints.up("xs")]: {
      width: "9em",
      fontSize: "0.7em",
      border: "1px solid #00EAA6"
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
      border: "2px solid #00EAA6"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em"
    }
  }
});

export default headerStyle;
