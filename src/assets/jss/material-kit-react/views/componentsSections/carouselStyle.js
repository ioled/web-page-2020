import image1 from "assets/img/ioled-banner.png";
import image2 from "assets/img/second-image.jpg";

const carouselStyle = theme => ({
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },

  firstSection: {
    backgroundImage: `url(${image1})`,

    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("xs")]: {
      height: "200px",
      backgroundSize: "100% 200px"
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

  firstSectionTitle: {
    color: "white",
    display: "block",
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "98px",
      fontSize: "0.8em"
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

  firstSectionTitleBox: {
    padding: "0.3em",
    borderRadius: "30px",
    background: "rgba(42, 42, 42, 0.3)"
  },

  buttonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  firstSectionButton: {
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "30px",
    fontSize: "0.8em"
  }
});

export default carouselStyle;
