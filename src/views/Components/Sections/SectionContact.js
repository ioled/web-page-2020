import React, { Component, Fragment } from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/contactStyle.js";

class SectionContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      phone: "",
      topic: ""
    };
  }

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <Box className={classes.container} id="contact">
        <Typography className={classes.title} variant="h3" component="h2">
          Contacto
        </Typography>

        <form className={classes.form}>
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
          </Grid>
          <Grid
            direction="row"
            justify="center"
            className={classes.textFieldsGrid2}
          >
            <Grid item md={12} className={classes.gridItem}>
              <TextField
                id="phone"
                label="Teléfono"
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })}
                className={classes.textField2}
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
            <Grid item md={12} className={classes.gridItem}>
              <TextField
                id="topic"
                label="Asunto"
                value={this.state.topic}
                onChange={e => this.setState({ topic: e.target.value })}
                className={classes.textField2}
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
          </Grid>
        </form>
      </Box>
    );
  }
}

export default withStyles(styles)(SectionContact);
