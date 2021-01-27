import React from "react";
import { makeStyles } from "@material-ui/core";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import PageHeader from "./components/PageHeader";
import Stepper from "../stepper/Stepper";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function ReleaseContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BreadCrumb />
      <PageHeader />
      <Stepper/>
    </div>
  );
}

export default ReleaseContainer;
