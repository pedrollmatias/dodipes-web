import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import SelectUserStep from "./SelectUserStep";
import ConfirmPasswordStep from "./ConfirmPasswordStep";
import EmailAdviseStep from "./EmailAdviseStep";

const ChangeAdminModal = ({ show, handleHide }) => {
  const stepEnum = {
    SELECT_USER: 1,
    CONFIRM_PASSWORD: 2,
    EMAIL_ADVISE: 3,
  };
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

      {step === stepEnum.SELECT_USER && (
        <SelectUserStep forwardStep={forwardStep} handleHide={handleHide} />
      )}

      {step === stepEnum.CONFIRM_PASSWORD && (
        <ConfirmPasswordStep
          forwardStep={forwardStep}
          handleHide={handleHide}
        />
      )}

      {step === stepEnum.EMAIL_ADVISE && (
        <EmailAdviseStep handleHide={handleHide} />
      )}
    </Modal>
  );
};

export default ChangeAdminModal;
