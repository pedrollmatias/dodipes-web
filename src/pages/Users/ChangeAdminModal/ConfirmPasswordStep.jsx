import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import ModalActionButton from "../../../components/UI/ModalActionButton";

const ConfirmPasswordStep = ({ handleHide, forwardStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    forwardStep();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="password">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <ModalActionButton variant="light" onClick={handleHide} type="button">
            Cancelar
          </ModalActionButton>

          <ModalActionButton variant="primary" type="submit">
            Confirmar
          </ModalActionButton>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default ConfirmPasswordStep;
