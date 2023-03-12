import Modal from "react-bootstrap/Modal";
import { FiMail } from "react-icons/fi";

import ModalActionButton from "../../../components/UI/ModalActionButton";

const EmailAdviseStep = ({ handleHide }) => {
  return (
    <>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <FiMail size={50} />
          </div>
          <p>
            Um link de confirmação foi enviado para seu email. Verifique sua
            caixa de entrada e confirme a alteração de administrador.
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <ModalActionButton variant="primary" type="button" onClick={handleHide}>
          Confirmar
        </ModalActionButton>
      </Modal.Footer>
    </>
  );
};

export default EmailAdviseStep;
