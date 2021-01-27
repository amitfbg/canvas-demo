import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  paper: {
    // flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // height: "10rem",
    borderRadius: "10px",
    border: "solid 1px #dddddd",
  },
}));

export default function MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Total Projects/MBs</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Impacted Apps</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Pre-deployments</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Total Outages</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Project</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Dependency</Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper className={classes.paper}>Calender</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Workback</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Leadership</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Release</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Testing</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
