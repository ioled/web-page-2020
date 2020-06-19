import React from "react";
import Box from "@material-ui/core/Box";

import { Typography } from "@material-ui/core";

//REACT PLAYER
//Library to embed videos from youtube in a app with React
import ReactPlayer from "react-player";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/videoStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();

  return (
    <Box className={classes.sectionVideoContainer} id="video">
      <div className={classes.titleContainer}>
        <Typography variant="h4" className={classes.videoTitle}>
          iOLED
        </Typography>
      </div>

      <div className={classes.videoContainer}>
        <div className={classes.playerWrapper}>
          <ReactPlayer
            className={classes.reactPlayer}
            url="https://www.youtube.com/watch?v=94x8UmS50sM"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Box>
  );
}
