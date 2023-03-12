import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { SiAirtable } from "react-icons/si";
import { BsDot } from "react-icons/bs";

import ModalActionButton from "../../components/UI/ModalActionButton";

import classes from "./AddTableModal.module.scss";

const TableIntervalForm = () => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <Form.Group className="mb-3" controlId="initial">
            <Form.Label>Número incial</Form.Label>
            <Form.Control className={classes["input--add-table-interval"]} type="text" />
          </Form.Group>
        </div>

        <SiAirtable size={45} />
      </div>

      <div className="d-flex justify-content-center align-items-end">
        {Array.from({ length: 4 }).map((index) => (
          <BsDot key={index} size={30} />
        ))}
      </div>

      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <Form.Group className="mb-3" controlId="final">
            <Form.Label>Número final</Form.Label>
            <Form.Control className={classes["input--add-table-interval"]} type="text" />
          </Form.Group>
        </div>

        <SiAirtable size={45} />
      </div>
    </div>
  );
};

const UniqueTableForm = () => {
  return (
    <Form.Group controlId="number">
      <Form.Label>Número da mesa</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  );
};

const AddTableModal = ({ show, onHide: handleHide, isInterval = false }) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isInterval ? "Adicionar intervalo de mesas" : "Adicionar mesa"}
        </Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
          {isInterval ? <TableIntervalForm /> : <UniqueTableForm />}
        </Modal.Body>

        <Modal.Footer>
          <ModalActionButton variant="light" onClick={handleHide} type="button">
            Cancelar
          </ModalActionButton>

          <ModalActionButton
            variant="primary"
            onClick={handleHide}
            type="submit"
          >
            Salvar
          </ModalActionButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddTableModal;
