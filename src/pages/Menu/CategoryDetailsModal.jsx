import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import ModalActionButton from "../../components/UI/ModalActionButton";

const CategoryDetailsModal = ({
  show,
  onHide: handleHide,
  isEditing = false,
}) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Editar" : "Adicionar"} categoria
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="Nome da categoria" />
          </Form.Group>
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

export default CategoryDetailsModal;
