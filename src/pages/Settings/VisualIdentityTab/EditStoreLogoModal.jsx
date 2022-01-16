import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AvatarEditor from "react-avatar-editor";

import ModalActionButton from "../../../components/UI/ModalActionButton";
import Slider from "../../../components/UI/Slider";
import FileUploaderButton from "../../../components/UI/FileUploaderButton";

const EditStoreLogoModal = ({ show, onHide: handleHide }) => {
  const initialTestImg =
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg";
  const [storeLogoFile, setStoreLogoFile] = useState(initialTestImg);
  const hangleStoreLogoFileChange = (event) => {
    const [file] = event.target.files;
    setStoreLogoFile(file);
  };

  const [, setStoreLogoEditorRef] = useState(null);
  const handleStoreLogoEditorRef = (editor) => setStoreLogoEditorRef(editor);

  const [imageEditorScale, setImageEditorScale] = useState(1);
  const handleImageEditorScale = (event) =>
    setImageEditorScale(Number(event.target.value));

  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Selecionar imagem do logotipo</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column align-items-center">
          <FileUploaderButton
            label="Upload de imagem"
            id="storeLogo"
            onChange={hangleStoreLogoFileChange}
          />

          <div className="my-4">
            <AvatarEditor
              ref={handleStoreLogoEditorRef}
              image={storeLogoFile}
              width={300}
              height={300}
              border={50}
              borderRadius={150}
              color={[255, 255, 255, 0.6]}
              scale={imageEditorScale}
            />
          </div>

          <div className="d-flex">
            <span className="me-4">Zoom</span>
            <Slider
              min={1}
              max={2}
              step={0.1}
              onChange={handleImageEditorScale}
            />
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
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
