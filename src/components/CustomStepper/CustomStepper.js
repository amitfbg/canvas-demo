import React, { useState } from "react";
import "./CustomStepper.css";
import { useHistory } from "react-router-dom";

const CustomStepper = ({ arr }) => {
  const history = useHistory();

  const items = arr;
  const [currentStep, setStep] = useState(0);
  history.push(`/overview/unrelease/${items[currentStep].toLowerCase()}`);
  const stepChange = (index) => {
    setStep(index);
    history.push(`/overview/unrelease/${items[index].toLowerCase()}`);
  };

  return (
    <div className="Stepper-container">
      <hr className="starting-line" />
      <hr className="ending-line" />
      <div className="steps">
        {items.map((step, key) => (
          <div key={key} className="Stepper-wrapper">
            <div
              className={`Step-icon ${
                currentStep >= items.indexOf(step) ? "active" : ""
              }`}
              onClick={() => stepChange(items.indexOf(step))}
            ></div>
            <div
              className={`Step-label ${
                currentStep >= items.indexOf(step) ? "active" : ""
              }`}
              onClick={() => stepChange(items.indexOf(step))}
            >
              {step}
            </div>
            { key !== items.length - 1 ? (
              <hr
                className={`Step-connector ${
                  currentStep > items.indexOf(step) ? "active" : ""
                }`}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomStepper;
