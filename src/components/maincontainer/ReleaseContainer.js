import { Breadcrumbs } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function ReleaseContainer() {
  return (
    <div>
      <div>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit">Overview</Link>
          <Typography color="textPrimary">Release</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default ReleaseContainer;
