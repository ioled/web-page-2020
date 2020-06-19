import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/headerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();

  return (
    <Box className={classes.header} id="header">
      <Typography className={classes.title} variant="h4" component="h1">
        <span className={classes.titleBox}>
          COMIENZA TU CULTIVO INTELIGENTE HOY CON <strong>iOLED</strong>
        </span>
      </Typography>
      <div className={classes.buttonBox}>
        <Button className={classes.button} variant="contained">
          Suscribir
        </Button>
      </div>
    </Box>
  );
}
