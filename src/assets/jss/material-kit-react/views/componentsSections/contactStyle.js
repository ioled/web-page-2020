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

    gridItem: {
      textAlign: "center"
    },

    title: {
      color: "#00EAA6",
      textAlign: "center",
      fontWeight: "bold",
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

    textField: {
      width: "35%",
      margin: "1em",
      [theme.breakpoints.down("sm")]: {
        height: 30,
        width: "70%",
        fontSize: "0.7em"
      }
    },

    label: {
      "&$focusedLabel": {
        color: "#00EAA6"
      },
      color: "#00EAA6",
      fontSize: "15px"
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
    },

    buttonBox: {
      display: "flex",
      margin: "1em",
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
      padding: "0.1em 0",

      "&:hover": {
        color: "#00EAA6",
        borderColor: "#00EAA6",
        background: "transparent"
      },

      [theme.breakpoints.up("xs")]: {
        width: "9em",
        fontSize: "0.8em",
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

export default navbarsStyle;
