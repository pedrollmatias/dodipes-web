import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { FiUploadCloud } from "react-icons/fi"

import ModalActionButton from "../../../components/UI/ModalActionButton";
import IconLabelButton from "../../../components/UI/IconLabelButton";

const EditStoreLogoModal = ({ show, onHide: handleHide }) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Selecionar imagem do logotipo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-center">
            <IconLabelButton label="Upload de imagem" icon={FiUploadCloud} className="px-4"/>
          </div>
          {/* <Form.Group className="mb-3" controlId="name">
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="Nome da categoria" />
          </Form.Group> */}
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

export default EditStoreLogoModal;
