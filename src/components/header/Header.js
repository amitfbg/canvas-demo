import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ReactComponent as Logo } from "../../assets/logo-canvas.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#31394d",
    zIndex: theme.zIndex.drawer + 1,
  },
  accountButton: {
    marginLeft: "auto",
  },
  toolBar: {
    minHeight: 48,
  },
  heading: {
    paddingLeft: 34,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <Logo />
          </IconButton>
          <Typography variant="h6" className={classes.heading}>
            UN-RELEASE
          </Typography>
          <IconButton
            className={classes.accountButton}
            color="inherit"
            aria-label="menu"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
