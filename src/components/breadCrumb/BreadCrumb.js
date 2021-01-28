import React from "react";
import { Breadcrumbs, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles({
  breadCrumb: {
    padding: "0.5rem 0 0.5rem 2rem",
    backgroundColor: "#ffffff",
  },
});

function BreadCrumb() {
  const classes = useStyles();
  return (
    <div className={classes.breadCrumb}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Typography color="textPrimary">Overview</Typography>
        <Typography color="textSecondary">Release</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb;
