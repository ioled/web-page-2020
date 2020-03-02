import { createStyles } from "@material-ui/core/styles";

const navbarsStyle = theme =>
  createStyles({
    container: {
      background: "#121211",
      padding: "4em 0"
    },

    form: {
      marginBottom: "0px"
    },

    textFieldsGrid: {
      marginLeft: "3em",
      marginRight: "3em",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "1em",
        marginRight: "1em"
      }
    },

    textFieldsGrid2: {
      marginLeft: "3em",
      marginRight: "3em"
      // border: "1px solid green",
    },

    gridItem: {
      // border: "1px solid yellow",
      textAlign: "center"
    },

    title: {
      color: "#00EAA6",
      textAlign: "center",
      fontWeight: "bold",
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

    textField: {
      width: "25%",
      margin: "1em",
      [theme.breakpoints.down("sm")]: {
        width: "40%"
      }
      // border: "1px solid blue"
    },

    textField2: {
      width: "50%",
      margin: "1em",
      [theme.breakpoints.down("sm")]: {
        width: "70%"
      }
      // border: "1px solid blue"
    },

    label: {
      "&$focusedLabel": {
        color: "#00EAA6"
      },
      color: "#00EAA6"
    },
    focusedLabel: {},

    underline: {
      color: "#FFFFFF",

      "&:before": {
        borderBottom: "1px solid white"
      },

      "&&&&:hover:before": {
        borderBottom: "1px solid white"
      },

      "&:after": {
        borderBottom: `1px solid cyan`
      }
    }
  });

export default navbarsStyle;
