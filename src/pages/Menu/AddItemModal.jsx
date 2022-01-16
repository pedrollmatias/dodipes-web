import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AvatarEditor from "react-avatar-editor";

import ModalActionButton from "../../components/UI/ModalActionButton";
import SlideToggle from "../../components/UI/SlideToggle";
import FileUploaderButton from "../../components/UI/FileUploaderButton";

const AddItemModal = ({ show, onHide: handleHide, isEditing = false }) => {
  return (
    <Modal show={show} onHide={handleHide} size="xl" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Editar" : "Adicionar"} item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-start mb-2 w-100">
                <FileUploaderButton
                  label="Upload de imagem"
                  id="storeLogo"
                  btnClass="d-flex justify-content-center w-100"
                />
              </div>

              <div className="d-flex justify-content-center mb-2">
                <AvatarEditor
                  image="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg"
                  width={480}
                  height={330}
                  border={25}
                  borderRadius={15}
                  color={[255, 255, 255, 0.6]}
                  scale={1.2}
                />
              </div>

              <span className="me-4">Zoom</span>
              <Form.Range min={1} max={2} step={0.1} />
            </div>

            <div className="col-md-6 col-sm-12">
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

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

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
