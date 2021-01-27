import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    top: 0,
    left: "30%",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: "2rem",
    border: "solid 1px #31394d",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 200,
  },
}));

export default function DatePicker() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        id="date"
        variant="standard"
        // label="Birthday"
        type="date"
        defaultValue="2021-01-27"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
