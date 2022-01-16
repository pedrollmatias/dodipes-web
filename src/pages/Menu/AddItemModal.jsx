import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AvatarEditor from "react-avatar-editor";

import ModalActionButton from "../../components/UI/ModalActionButton";
import SlideToggle from "../../components/UI/SlideToggle";
import Divider from "../../components/UI/Divider";

const AddItemModal = ({ show, onHide: handleHide, isEditing = false }) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Editar" : "Adicionar"} item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-center mb-2">
            <AvatarEditor
              image="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg"
              width={300}
              height={300}
              border={25}
              borderRadius={150}
              color={[255, 255, 255, 0.6]}
              scale={1.2}
            />
          </div>

          <div className="d-flex mb-4">
            <span className="me-4">Zoom</span>
            <Form.Range min={1} max={2} step={0.1} />
          </div>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Category">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>u
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="row">
            <div className="col-md-9 col-sm-12">
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>

            <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-end pb-2">
              <Form.Group className="mb-3" controlId="active">
                <SlideToggle label="Ativo" />
              </Form.Group>
            </div>
          </div>
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

export default AddItemModal;
