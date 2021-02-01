import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  List,
  Divider,
  Toolbar,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 60,
  },
  drawerPaper: {
    width: 65,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "&:hover": {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  nested: {
    marginLeft: theme.spacing(4),
  },
}));

const LeftNavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e === 1 && setOpen(!open);
  };

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Intake", "Planning", "Launch", "Measure"].map((text, index) => (
              <>
                <ListItem button onClick={() => handleClick(index)} key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {index === 1 && open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {/* On Click menu item of Planning tab */}
                {index === 1 && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItem>
                    </List>
                  </Collapse>
                )}
              </>
            ))}
          </List>

          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default LeftNavBar;
