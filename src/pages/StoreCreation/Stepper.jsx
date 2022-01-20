import React from "react";

import classes from "./Stepper.module.scss";

const Stepper = ({ steps, activeStep }) => {
  const stepsKey = Object.keys(steps);

  return (
    <div className={`${classes.stepper} d-flex align-items-center w-100`}>
      {stepsKey.map((stepKey, index) => {
        const activeStepClass =
          steps[stepKey].index <= activeStep.index ? classes.active : "";
        const activeLineClass =
          steps[stepKey].index < activeStep.index ? classes.active : "";

        return (
          <React.Fragment key={steps[stepKey].index}>
            <div className="d-flex flex-column align-items-center">
              <div
                className={`${classes["icon--step"]} ${activeStepClass} d-flex justify-content-center align-items-center mb-3`}
              >
                {steps[stepKey].index}
              </div>
              <span className={activeStepClass}>{steps[stepKey].label}</span>
            </div>

            {index !== stepsKey.length - 1 && (
              <div className="flex-grow-1">
                <div
                  className={`${classes.line} ${activeLineClass} mx-3`}
                ></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
