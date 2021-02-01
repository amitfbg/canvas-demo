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
<<<<<<< HEAD
      <CustomStepper />
      {/* <Stepper /> */}
=======
      <CustomStepper arr={arr}/>
>>>>>>> 871bc8e56f007d6756f1e45eea19210f569d176f
      <MainContainer />
    </div>
  );
};

export default ReleaseContainer;
