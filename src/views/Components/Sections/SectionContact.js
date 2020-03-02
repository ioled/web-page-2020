import React, { Component, Fragment } from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

import styles from "assets/jss/material-kit-react/views/componentsSections/contactStyle.js";

class SectionContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      commune: "",
      size: "",
      topic: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, phone, commune, size, topic } = this.state;

    axios
      .post("http://localhost:3001/create", {
        name,
        email,
        phone,
        commune,
        size,
        topic
      })
      .then(() => console.log("Mensaje enviado"))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <Box className={classes.container} id="contact">
        <Typography className={classes.title} variant="h3" component="h2">
          Contacto
        </Typography>

        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Grid
            className={classes.textFieldsGrid}
            direction="column"
            justify="center"
          >
            <TextField
              id="name"
              label="Nombre"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.underline
                }
              }}
            />
            <TextField
              id="email"
              label="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.underline
                }
              }}
            />
            <TextField
              id="phone"
              label="Teléfono"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.underline
                }
              }}
            />
            <TextField
              id="commune"
              label="Comuna"
              value={this.state.commune}
              onChange={e => this.setState({ commune: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.underline
                }
              }}
            />

            <TextField
              id="size"
              label="Tamaño del led"
              value={this.state.size}
              onChange={e => this.setState({ size: e.target.value })}
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.underline
                }
              }}
            />

            <TextField
              id="topic"
              label="Asunto"
              value={this.state.topic}
              onChange={e => this.setState({ topic: e.target.value })}
              className={classes.textField}
              multiline
              maxRows="3"
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.underline
                }
              }}
            />
          </Grid>

          <div className={classes.buttonBox}>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Box>
    );
  }
}

export default withStyles(styles)(SectionContact);
