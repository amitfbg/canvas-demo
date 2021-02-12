import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme, props) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: (props) => props.height,
    borderRadius: "10px",
    border: "solid 1px #dddddd",
  },
}));

export const SmallGrid = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper className={classes.paper}>
        {props.name}
        {props.component}
      </Paper>
    </Grid>
  );
};

export const MediumGrid = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item xs={12} sm={12} lg={6}>
      <Paper className={classes.paper}>{props.name}</Paper>
    </Grid>
  );
};
