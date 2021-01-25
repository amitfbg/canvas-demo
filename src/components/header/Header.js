import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#31394d",
    zIndex:theme.zIndex.drawer+1
  },
  accountButton: {
    marginLeft: "auto",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">UN-RELEASED</Typography>
          <IconButton
            className={classes.accountButton}
            color="inherit"
            aria-label="menu"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
