import { createStyles } from "@material-ui/core/styles";

const navbarsStyle = theme =>
  createStyles({
    container: {
      background: "#121211"
    },

    textField: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: "2em"
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
