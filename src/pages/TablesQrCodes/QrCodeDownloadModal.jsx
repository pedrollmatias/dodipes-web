import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { MdOutlineQrCode2 } from "react-icons/md";
import { FiInfo } from "react-icons/fi";

import ModalActionButton from "../../components/UI/ModalActionButton";

import classes from "./QrCodeDownloadModal.module.scss";

const QrCodeDimensionFormControl = ({ isMultiTables }) => {
  return (
    <Form.Group className="d-flex align-items-center" controlId="dimension">
      <Form.Label className="mb-0">
        Dimensão {isMultiTables ? "dos QR Codes" : "do QR Code"}:
      </Form.Label>
      <div className="d-flex justify-content-center mx-3">
        <Form.Control
          className={classes["input--qrcode-dimension"]}
          type="text"
        />
      </div>
      <span>cm</span>
    </Form.Group>
  );
};

const QrCodeDownloadModal = ({
  show,
  onHide: handleHide,
  isMultiTables,
  tableNumber,
}) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>
            {isMultiTables
              ? "Download QR Codes"
              : `Download QR Code - Mesa ${tableNumber}`}
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <div className="d-flex flex-column align-items-center">
              <QrCodeDimensionFormControl isMultiTables={isMultiTables} />

              <div className="d-flex align-items-center">
                <span className="pt-2">15cm</span>

                <div className={`${classes["container--qrcode"]} m-4`}>
                  <MdOutlineQrCode2 size={250} />
                </div>
              </div>
            </div>

            {isMultiTables && (
              <div className="d-flex justify-content-center align-items-center text-muted my-2">
                <div className="me-3">
                  <FiInfo size={30} />
                </div>
                <p className="mb-0">
                  O arquivo será gerado em PDF, contendo um QR Code por página.
                </p>
              </div>
            )}
          </Modal.Body>

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
              onClick={handleHide}
              type="submit"
            >
              Download
            </ModalActionButton>
          </Modal.Footer>
        </Form>
      </Form>
    </Modal>
  );
};

export default QrCodeDownloadModal;
