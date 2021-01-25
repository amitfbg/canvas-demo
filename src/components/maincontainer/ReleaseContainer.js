import React from "react";
import { makeStyles } from "@material-ui/core";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import PageHeader from "./components/PageHeader";

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
    </div>
  );
}

export default ReleaseContainer;
