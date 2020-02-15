import { container, title } from "assets/jss/material-kit-react.js";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const navbarsStyle = theme => ({
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  },

  //OWN DESIGN
  miioled: {
    border: "1px solid white",
    borderRadius: "20px",
    backgroundColor: "#212121",
    "&:hover": {
      color: "#00EAA6",
      borderColor: "#00EAA6"
    }
  },

  ioledLogoNavbar: {
    [theme.breakpoints.up("xs")]: {
      height: "30px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "35px"
    },
    [theme.breakpoints.up("md")]: {
      height: "40px"
    }
  }
});

export default navbarsStyle;
