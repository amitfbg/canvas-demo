import React from "react";
import { makeStyles } from "@material-ui/core";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import PageHeader from "../page-header/PageHeader";
import MainContainer from "../maincontainer/MainContainer";
import CustomStepper from "../CustomStepper/CustomStepper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fafafa",
    height: "100%",
  },
});

const ReleaseContainer = () => {
  const classes = useStyles();
  const arr = ["PLAN", "INTAKE" ,"MONITOR"];
  return (
    <div className={classes.root}>
      <BreadCrumb />
      <PageHeader />
      <CustomStepper arr={arr}/>
      <MainContainer />
    </div>
  );
};

export default ReleaseContainer;
