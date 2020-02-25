import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-scroll";

import { withStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import ioledLogoNavbar from "./../../../assets/img/logo-ioled-navbar.png";

class SectionNavbars extends React.Component {
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
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <Link
                activeClass="fixed"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.listLink}
                onClick={this.toggleDrawer(false)}
              >
                Inicio
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.listLink}
                onClick={this.toggleDrawer(false)}
              >
                Video
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                activeClass="active"
                to="whats-ioled"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.listLink}
                onClick={this.toggleDrawer(false)}
              >
                Sobre Nosotros
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                activeClass="active"
                to="information-parameters"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.listLink}
                onClick={this.toggleDrawer(false)}
              >
                Beneficios
              </Link>
            </ListItem>
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
                    <Typography className={classes.listLink}>Inicio</Typography>
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
                    <Typography className={classes.listLink}>Video</Typography>
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
                      Sobre Nosotros
                    </Typography>
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
                      Beneficios
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
