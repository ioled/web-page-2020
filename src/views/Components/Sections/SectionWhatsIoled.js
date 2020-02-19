import React from "react";

import Grid from "@material-ui/core/Grid";

import { Typography } from "@material-ui/core";

import image from "assets/img/ioled-section-whatsioled.jpg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/whatsIoledStyle.js";

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
      <Grid item xs={8} sm={5} md={5} lg={5}>
        <img src={image} alt="whatsIoled" className={classes.imageSection} />
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={7} className={classes.textSection}>
        <Typography variant="h4" className={classes.textSectionTitle}>
          ¿Qué es iOLED?
        </Typography>
        <Typography variant="body1" className={classes.textSectionParagraph}>
          Somos una Startup de biotecnología en la industria de la cannabis en
          Chile, enfocados en mejorar la experiencia de los cultivadores,
          desarrollando soluciones con iluminación led para Horticultura.
          Integrando tecnología IoT, pudiendo controlar y administrar el cultivo
          de forma remota desde un smartphone, notebooks y pc, obteniendo
          información en tiempo real de tu cultivo.
        </Typography>
      </Grid>
    </Grid>
  );
}
