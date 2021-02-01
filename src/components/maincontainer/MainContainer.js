import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { MediumGrid, SmallGrid } from "../grid/GridTypes";

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
}));

export default function MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <SmallGrid name="Total Projects/MBs" height="6rem" />
          <SmallGrid name="Impacted Apps" height="6rem" />
          <SmallGrid name="Pre-deployments" height="6rem" />
          <SmallGrid name="Total Outages" height="6rem" />
        </Grid>
        <Grid container item spacing={3}>
          <SmallGrid name="Projec" height="17rem" />
          <SmallGrid name="Dependency" height="17rem" />
          <MediumGrid name="Calender" height="17rem" />
        </Grid>
        <Grid container item spacing={3}>
          <SmallGrid name="Workback" height="35rem" />
          <SmallGrid name="Leadership" height="35rem" />
          <SmallGrid name="Release" height="35rem" />
          <SmallGrid name="Testing" height="35rem" />
        </Grid>
      </Grid>
    </div>
  );
}
