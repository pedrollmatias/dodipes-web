import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AvatarEditor from "react-avatar-editor";

import ModalActionButton from "../../../components/UI/ModalActionButton";
import FileUploaderButton from "../../../components/UI/FileUploaderButton";

const ImageEditorModal = ({
  show,
  onHide: handleHide,
  image,
  setImage,
  title,
}) => {
  const [file, setFile] = useState(image);
  const [imageEditorScale, setImageEditorScale] = useState(1);
  const [editorRef, setEditorRef] = useState(null);

  const handleEditorRef = (editor) => setEditorRef(editor);

  const handleImageEditorScale = (event) =>
    setImageEditorScale(Number(event.target.value));

  const handleFileChange = (event) => {
    const [file] = event.target.files;
    setFile(file);
  };

  const handleConfirmation = () => {
    if (editorRef) {
      const scaledImage = editorRef.getImageScaledToCanvas().toDataURL();

      setImage(scaledImage);
    }

    handleHide();
  };

  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column align-items-center">
          <FileUploaderButton
            label="Upload de imagem"
            id="storeLogo"
            onChange={handleFileChange}
          />

          {file && (
            <>
              <div className="my-4">
                <AvatarEditor
                  ref={handleEditorRef}
                  image={file}
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
                <Form.Range
                  min={1}
                  max={2}
                  step={0.1}
                  value={imageEditorScale}
                  onChange={handleImageEditorScale}
                />
              </div>
            </>
          )}
        </Modal.Body>

        {file && (
          <>
            <Modal.Footer className="d-flex justify-content-center">
              <ModalActionButton
                variant="light"
                onClick={handleHide}
                type="button"
              >
                Cancelar
              </ModalActionButton>

              <ModalActionButton
                variant="primary"
                onClick={handleConfirmation}
                type="button"
              >
                Confirmar
              </ModalActionButton>
            </Modal.Footer>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default ImageEditorModal;
