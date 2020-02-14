import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// REACT-SLICK (CAROUSEL)
//This
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/ioled-banner.png";
// import image2 from "assets/img/bg2.jpg";
// import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dotsClass: "slick-dots",
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
        {/* CAROUSEL */}
        <Carousel {...settings}>
          <Box className={classes.firstSection}>
            {/* FIRST CAROUSEL'S SECTION*/}
            <Typography
              className={classes.firstSectionTitle}
              variant="h4"
              component="h1"
            >
              <span className={classes.firstSectionTitleBox}>
                CULTIVO INTELIGENTE HOY CON <strong>iOLED</strong>
              </span>
            </Typography>
            <div className={classes.buttonBox}>
              <Button
                className={classes.firstSectionButton}
                variant="contained"
              >
                Suscribir
              </Button>
            </div>
          </Box>

          {/* SECOND CAROUSEL'S SECTION */}

          <div className={classes.secondSection}>
            <h1>Second Carousel Section</h1>
          </div>
        </Carousel>
      </GridItem>
    </GridContainer>
  );
}
