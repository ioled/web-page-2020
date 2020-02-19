import React from "react";

import Grid from "@material-ui/core/Grid";

import { Typography } from "@material-ui/core";

import {
  PhoneSharp,
  MailOutlineRounded,
  LocationOnRounded
} from "@material-ui/icons";

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
      <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
        <Typography className={classes.titleGridItem}>
          <strong>iOLED</strong>
        </Typography>
        <ul className={classes.footerList}>
          <li>
            <a href="https://www.ioled.cl/">Sobre iOLED</a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">
              Términos y condiciones del servicio
            </a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">Contacto</a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">FAQ</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
        <Typography className={classes.titleGridItem}>
          <strong>MI iOLED</strong>
        </Typography>
        <ul className={classes.footerList}>
          <li>
            <a href="https://www.ioled.cl/">Iniciar Sesión</a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">Crear una cuenta</a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">Mis equipos</a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">Manual de usuario</a>
          </li>
          <li>
            <a href="https://www.ioled.cl/">Descarga nuestra App</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
        <Typography className={classes.titleGridItem}>
          <strong>CONTACTO</strong>
        </Typography>
        <ul className={classes.footerList}>
          <li className={classes.liWithIcon}>
            <PhoneSharp className={classes.iconElement} />
            +56963538953
          </li>
          <li className={classes.liWithIcon}>
            <MailOutlineRounded className={classes.iconElement} />
            info@ioled.cl
          </li>
          <li className={classes.liWithIcon}>
            <LocationOnRounded className={classes.iconElement} />
            Vitacura 2760 Santiago Región Metropolitana
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
