import { container } from "assets/jss/material-kit-react.js";

const carouselStyle = theme => ({
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },

  slickImage: {
    width: "100% !important",
    display: "inline-flex !important",

    [theme.breakpoints.up("xs")]: {
      height: "200px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "350px"
    },
    [theme.breakpoints.up("md")]: {
      height: "500px"
    }
  }
});

export default carouselStyle;
