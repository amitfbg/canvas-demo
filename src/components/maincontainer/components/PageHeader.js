import React from "react";
import RocketIcon from "../../../assets/RocketIcon";
import Typography from "@material-ui/core/Typography";

function PageHeader() {
  return (
    <div>
      <RocketIcon />
      <Typography variant="h3" color="initial">
        RELEASE
      </Typography>
    </div>
  );
}

export default PageHeader;
