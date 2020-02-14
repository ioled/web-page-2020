import React from "react";
// MATERIAL UI
//Material ui components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// MATERIAL UI
//Material ui icons

// import Email from "@material-ui/icons/Email";
import Header from "components/Header/Header.js";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

//STYLES***
//This importation looks like it has something to see with css/styles
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

//LOGO IMAGE NAVBAR
//Import image logo-ioled-navbar as a React Component
import ioledLogoNavbar from "./../../../assets/img/logo-ioled-navbar.png";

//MAKESTYLES
//Makestyles to edit styles with React
const useStyles = makeStyles(styles);

//REACT
//Export the function SectionNavbars and return some JSX Code
export default function SectionNavbars() {
  const classes = useStyles();

  //REACT
  //Components created with functions doesn't need render() method.
  return (
    <Header
      color="dark"
      leftLinks={
        <img src={ioledLogoNavbar} className={classes.ioledLogoNavbar} />
      }
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Inicio
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Sobre iOLED
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Servicios
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Desarrollo
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Contacto
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Blog
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.miioled} type="button">
              Mi iOLED
            </Button>
          </ListItem>
        </List>
      }
    />
  );
}
