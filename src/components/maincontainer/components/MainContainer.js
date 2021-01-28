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
    marginRight: theme.spacing(3),
  },
  paper1: {
    // flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "6rem",
    borderRadius: "10px",
    border: "solid 1px #dddddd",
  },
  paper2: {
    // flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "17rem",
    borderRadius: "10px",
    border: "solid 1px #dddddd",
  },
  paper3: {
    // flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "35rem",
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
            <Paper className={classes.paper1}>Total Projects/MBs</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper1}>Impacted Apps</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper1}>Pre-deployments</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper1}>Total Outages</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper2}>Project</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper2}>Dependency</Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper className={classes.paper2}>Calender</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper3}>Workback</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper3}>Leadership</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper3}>Release</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper3}>Testing</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
