import React from "react";

//REACT PLAYER
//Library to embed videos from youtube in a app with React
import ReactPlayer from "react-player";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/videoStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <div className={classes.titleContainer}>
            <h2>Sección 2: VIDEO</h2>
            <p className={classes.typography}>
              Amet laborum ullamco esse ipsum do eiusmod sint. Aute sunt nisi in
              et reprehenderit sunt nostrud nulla exercitation sint laboris.
              Reprehenderit ea dolore in fugiat non amet veniam magna
              laboris.Amet laborum ullamco esse ipsum do eiusmod sint.Amet
              laborum ullamco esse ipsum do eiusmod sint. Aute sunt nisi in et
              reprehenderit sunt nostrud nulla exercitation sint laboris.
              Reprehenderit ea dolore in fugiat non amet veniam magna
              laboris.Amet laborum ullamco esse ipsum do eiusmod sint.
            </p>
          </div>
        </GridItem>
      </GridContainer>
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
    </React.Fragment>
  );
}
