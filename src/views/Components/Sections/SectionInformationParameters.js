import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { Typography } from "@material-ui/core";

import cloud from "assets/img/cloud.png";
import timer from "assets/img/timer.png";
import lightning from "assets/img/lightning.png";
import temperature from "assets/img/temperature.png";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/informationParametersStyle.js";

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
      <Grid item md={5} className={classes.gridItem}>
        <Box className={classes.gridItemTitle}>
          <img src={cloud} className={classes.imageCloud} />{" "}
          <Typography>
            <strong>HUMEDAD</strong>
          </Typography>
        </Box>
        <Typography className={classes.gridItemParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          facilisis, mi eu dictum vehicula, ipsum orci luctus est, sit amet
          sodales dui lectus eu est. Donec venenatis aliquet ex, convallis
          ultricies dolor mattis hendrerit.
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.gridItem}>
        <Box className={classes.gridItemTitle}>
          <img src={timer} className={classes.imageTimer} />{" "}
          <Typography>
            <strong>TIMER</strong>
          </Typography>
        </Box>
        <Typography className={classes.gridItemParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          facilisis, mi eu dictum vehicula, ipsum orci luctus est, sit amet
          sodales dui lectus eu est. Donec venenatis aliquet ex, convallis
          ultricies dolor mattis hendrerit.
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.gridItem}>
        <Box className={classes.gridItemTitle}>
          <img src={lightning} className={classes.imageLightning} />{" "}
          <Typography>
            <strong>CONSUMO</strong>
          </Typography>
        </Box>
        <Typography className={classes.gridItemParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          facilisis, mi eu dictum vehicula, ipsum orci luctus est, sit amet
          sodales dui lectus eu est. Donec venenatis aliquet ex, convallis
          ultricies dolor mattis hendrerit.
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.gridItem}>
        <Box className={classes.gridItemTitle}>
          <img src={temperature} className={classes.imageTemperature} />{" "}
          <Typography>
            <strong>TEMPERATURA</strong>
          </Typography>
        </Box>
        <Typography className={classes.gridItemParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          facilisis, mi eu dictum vehicula, ipsum orci luctus est, sit amet
          sodales dui lectus eu est. Donec venenatis aliquet ex, convallis
          ultricies dolor mattis hendrerit.
        </Typography>
      </Grid>
    </Grid>
  );
}
