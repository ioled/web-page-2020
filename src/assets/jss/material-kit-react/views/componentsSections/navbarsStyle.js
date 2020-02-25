import { createStyles } from "@material-ui/core/styles";

const navbarsStyle = theme =>
  createStyles({
    toolbar: {
      background: "#121211"
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none"
      }
    },
    titleBox: {
      flexGrow: 3
    },

    ioledLogo: {
      [theme.breakpoints.up("xs")]: {
        width: "130px",
        height: "auto",
        marginLeft: "0.6em"
      },
      [theme.breakpoints.up("sm")]: {
        width: "140px",
        height: "auto",
        marginLeft: "1.4em"
      },
      [theme.breakpoints.up("md")]: {
        width: "150px",
        height: "auto",
        marginLeft: "2em"
      },
      [theme.breakpoints.up("lg")]: {
        width: "160px",
        height: "auto",
        marginLeft: "2.5em"
      }
    },

    menuBox: {
      flexGrow: 1,
      [theme.breakpoints.down("md")]: {
        display: "none"
      }
    },

    listContainer: {
      listStyleType: "none",
      display: "flex"
    },

    listElement: {
      margin: "0",
      padding: "0"
    },

    listLink: {
      color: "#FFFFFF",
      cursor: "pointer",
      margin: "0",
      padding: "0.5em 1.5em",
      fontSize: "0.8em",
      "&:hover": {
        color: "#00EAA6"
      }
    },

    listLinkResponsive: {
      color: "#FFFFFF",
      cursor: "pointer",
      padding: "0.5em 2em",
      marginBottom: "0.5em",
      "&:hover": {
        color: "#00EAA6"
      }
    },

    listLinkText: {
      marginLeft: "1em",
      fontSize: "0.8em",

      [theme.breakpoints.up("xs")]: {
        fontSize: "0.7em"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.8em"
      }
    },

    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },

    drawer: {
      height: "100%",
      color: "white",
      background: "#121211"
    }
  });

export default navbarsStyle;
