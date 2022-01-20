import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import SelectUserStep from "./SelectUserStep";
import ConfirmPasswordStep from "./ConfirmPasswordStep";
import EmailAdviseStep from "./EmailAdviseStep";

const stepsEnum = {
  SELECT_USER: 1,
  CONFIRM_PASSWORD: 2,
  EMAIL_ADVISE: 3,
};

const ChangeAdminModal = ({ show, handleHide }) => {
  const { SELECT_USER, CONFIRM_PASSWORD, EMAIL_ADVISE } = stepsEnum;
  const [step, setStep] = useState(SELECT_USER);

  const forwardStep = () => {
    setStep((step) => {
      const nextStep = step + 1;

      return nextStep > EMAIL_ADVISE ? EMAIL_ADVISE : nextStep;
    });
  };

  const resetStep = () => setStep(SELECT_USER);

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

      {step === SELECT_USER && (
        <SelectUserStep forwardStep={forwardStep} handleHide={handleHide} />
      )}

      {step === CONFIRM_PASSWORD && (
        <ConfirmPasswordStep
          forwardStep={forwardStep}
          handleHide={handleHide}
        />
      )}

      {step === EMAIL_ADVISE && (
        <EmailAdviseStep handleHide={handleHide} />
      )}
    </Modal>
  );
};

export default ChangeAdminModal;
