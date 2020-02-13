import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/ioled-banner.png";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
        <Carousel {...settings}>
          <div>
            <img
              src={image1}
              alt="First slide"
              className={classes.slickImage}
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Yellowstone National Park, United States
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image2}
              alt="Second slide"
              className={classes.slickImage}
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Somewhere Beyond, United States
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image3}
              alt="Third slide"
              className={classes.slickImage}
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Yellowstone National Park, United States
              </h4>
            </div>
          </div>
        </Carousel>
      </GridItem>
    </GridContainer>
  );
}
