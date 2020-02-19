import React from "react";

import Grid from "@material-ui/core/Grid";

import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.gridContainer}
    >
      <Grid item md={4} className={classes.gridItem}>
        <Typography className={classes.titleGridItem}>
          <strong>iOLED</strong>
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.gridItem}>
        <Typography className={classes.titleGridItem}>
          <strong>CONTACTO</strong>
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.gridItem}>
        <Typography className={classes.titleGridItem}>
          <strong>MI iOLED</strong>
        </Typography>
      </Grid>
    </Grid>
  );
}
