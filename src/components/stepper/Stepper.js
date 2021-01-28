import React from "react";
import { makeStyles, withStyles, StepConnector } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fafafa",
  },
}));

function getSteps() {
  return ["Plan", "Monitor", "Intake"];
}
const ColorlibConnector = withStyles({
  root: {},
  active: {
    "& $line": {
      backgroundColor: "#e20074",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#e20074",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

export default function MyStepper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={2}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        <hr />
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
