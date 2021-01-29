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
  let finalpathList = window.location.pathname.split("/").filter((path) => {
    return path !== "";
  });
  return (
    <div className={classes.breadCrumb}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {finalpathList.map((path, index) => {
          return path !== "" && index !== finalpathList.length - 1 ? (
            <Typography color="textPrimary">{path}</Typography>
          ) : (
            <Typography color="error">{path}</Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb;
