import { makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: red[500],
    // display: "flex",

    width: "fit-content",
    // height: "100%",
  },
  tabContainer: {
    // minWidth: 0,
    margin: 0,
    padding: 0,
  },
  tab: {
    textTransform: "none",
    margin: 0,
    padding: 0,
  },
}));

function LeftNavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabContainer}
        orientation="vertical"
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab className={classes.tab} icon={<PhoneIcon />} aria-label="phone" />
        <Tab
          className={classes.tab}
          icon={<FavoriteIcon />}
          aria-label="favorite"
        />
        <Tab
          className={classes.tab}
          icon={<PersonPinIcon />}
          aria-label="person"
        />
      </Tabs>
    </div>
  );
}
export default LeftNavBar;
