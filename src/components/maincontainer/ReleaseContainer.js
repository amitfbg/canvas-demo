import React from "react";
import { makeStyles } from "@material-ui/core";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import PageHeader from "./components/PageHeader";
import Stepper from "../stepper/Stepper";
import MainContainer from "./components/MainContainer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fafafa",
    height: "100%",
  },
});

function ReleaseContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BreadCrumb />
      <PageHeader />
      <Stepper/>
      <MainContainer />
    </div>
  );
}

export default ReleaseContainer;
