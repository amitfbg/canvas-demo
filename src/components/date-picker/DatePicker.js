import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: "2rem",
    border: "solid 1px #31394d",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "140px",
  },
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        id="date"
        variant="standard"
        type="date"
        defaultValue="2021-02-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default DatePicker;
