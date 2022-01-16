import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import SelectUserStep from "./SelectUserStep";
import ConfirmPasswordStep from "./ConfirmPasswordStep";
import EmailAdviseStep from "./EmailAdviseStep";

const Stepper = ({ step, forwardStep, handleHide }) => {
  const stepToTextEnum = {
    1: "selectUser",
    2: "confirmPassword",
    3: "emailAdvise",
  };

  switch (stepToTextEnum[step]) {
    case "selectUser":
      return (
        <SelectUserStep forwardStep={forwardStep} handleHide={handleHide} />
      );
    case "confirmPassword":
      return (
        <ConfirmPasswordStep
          forwardStep={forwardStep}
          handleHide={handleHide}
        />
      );
    case "emailAdvise":
      return <EmailAdviseStep handleHide={handleHide} />;
    default:
      return <></>;
  }
};

const ChangeAdminModal = ({ show, handleHide }) => {
  const initialStep = 1;
  const lastStap = 3;
  const [step, setStep] = useState(initialStep);

  const forwardStep = () => {
    setStep((step) => {
      const nextStep = step + 1;

      return nextStep > lastStap ? lastStap : nextStep;
    });
  };

  const resetStep = () => setStep(initialStep);

  return (
    <Modal
      show={show}
      onHide={handleHide}
      onExited={resetStep}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Alterar administrador</Modal.Title>
      </Modal.Header>

      <Stepper step={step} forwardStep={forwardStep} handleHide={handleHide} />
    </Modal>
  );
};

export default ChangeAdminModal;
