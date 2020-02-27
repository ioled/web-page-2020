import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";

import HomeIcon from "@material-ui/icons/Home";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { Link } from "react-scroll";

import { withStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import ioledLogoNavbar from "./../../../assets/img/logo-ioled-navbar.png";

class SectionNavbars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false
    };
  }

  toggleDrawer = open => event => {
    this.setState({ drawerRight: open });
  };

  sideList = () => {
    const { classes } = this.props;

    return (
      <div
        className={classes.drawer}
        role="presentation"
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
        <Box>
          <List component="nav">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.toggleDrawer(false)}
            >
              <ListItem className={classes.listLinkResponsive}>
                <HomeIcon />
                <Typography className={classes.listLinkText}>INICIO</Typography>
              </ListItem>
            </Link>

            <Link
              activeClass="active"
              to="whats-ioled"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.toggleDrawer(false)}
            >
              <ListItem className={classes.listLinkResponsive}>
                <InfoIcon />
                <Typography className={classes.listLinkText}>
                  SOBRE NOSOTROS
                </Typography>
              </ListItem>
            </Link>

            <Link
              activeClass="active"
              to="video"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.toggleDrawer(false)}
            >
              <ListItem className={classes.listLinkResponsive}>
                <PlayArrowIcon />
                <Typography className={classes.listLinkText}>VIDEO</Typography>
              </ListItem>
            </Link>

            <Link
              activeClass="active"
              to="information-parameters"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.toggleDrawer(false)}
            >
              <ListItem className={classes.listLinkResponsive}>
                <AttachMoneyIcon />
                <Typography className={classes.listLinkText}>
                  BENEFICIOS
                </Typography>
              </ListItem>
            </Link>
          </List>
        </Box>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { drawerRight } = this.state;
    return (
      <React.Fragment id="navbar">
        <AppBar display="block" position="fixed">
          <Toolbar className={classes.toolbar}>
            <Box className={classes.titleBox}>
              <img
                src={ioledLogoNavbar}
                alt="ioled-logo"
                className={classes.ioledLogo}
              />
            </Box>

            <Box className={classes.menuBox}>
              <ul className={classes.listContainer}>
                <li className={classes.listElement}>
                  <Link
                    activeClass="fixed"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.listLink}>INICIO</Typography>
                  </Link>
                </li>
                <li className={classes.listElement}>
                  <Link
                    activeClass="active"
                    to="whats-ioled"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.listLink}>
                      SOBRE NOSOTROS
                    </Typography>
                  </Link>
                </li>
                <li className={classes.listElement}>
                  <Link
                    activeClass="active"
                    to="video"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.listLink}>VIDEO</Typography>
                  </Link>
                </li>

                <li className={classes.listElement}>
                  <Link
                    activeClass="active"
                    to="information-parameters"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography className={classes.listLink}>
                      BENEFICIOS
                    </Typography>
                  </Link>
                </li>
              </ul>
            </Box>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerRight}
          onClose={this.toggleDrawer(false)}
        >
          {this.sideList()}
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SectionNavbars);
