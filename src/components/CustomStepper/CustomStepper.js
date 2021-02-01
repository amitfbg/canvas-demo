import React, { useState } from "react";
import "./CustomStepper.css";

const CustomStepper = () => {
  const items = ["PLAN", "INTAKE", "MONITOR"];
  const [Step, setStep] = useState(0);

  const stepChange = (step) => {
    console.log(step);
  };

  return (
    <div className="Stepper-container">
      <hr className="starting-line" />
      <div className="steps">
        {items.map((step, key) => (
          <div key={key} className="Stepper-wrapper">
            <div className="Step-icon" onClick={() => stepChange(step)}></div>
            <div className="Step-label">{step}</div>
            {key !== items.length - 1 ? <hr className="Step-connector" /> : ""}
          </div>
        ))}
      </div>
      <hr className="ending-line" />
    </div>
  );
};

export default CustomStepper;
