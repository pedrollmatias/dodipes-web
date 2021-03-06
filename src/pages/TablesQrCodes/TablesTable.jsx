import { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FiTrash2 } from "react-icons/fi";

import QrCodeDownloadModal from "./QrCodeDownloadModal";

import SlideToggle from "../../components/UI/SlideToggle";
import IconButton from "../../components/UI/IconButton";

const tableHeader = [<Form.Check type="checkbox" />, "Mesa", "Ativa", "Ação"];

const tableBody = [
  {
    numero: 1,
    ativa: true,
  },
  {
    numero: 2,
    ativa: true,
  },
  {
    numero: 3,
    ativa: true,
  },
];

const TablesTable = () => {
  const [tableNumber, setTableNumber] = useState(null);
  const [qrCodeDownloadModalShow, setQrCodeDownloadModalShow] = useState(false);

  const handleQrCodeDownloadModalShow = (tableNumber) => {
    setQrCodeDownloadModalShow(true);
    setTableNumber(tableNumber);
  };
  const handleQrCodeDownloadModalHide = () => setQrCodeDownloadModalShow(false);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            {tableHeader.map((headerItem, index) => (
              <th key={index}>{headerItem}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((bodyItem, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" defaultChecked={true} />
              </td>
              <td>{bodyItem.numero}</td>
              <td>
                {bodyItem.ativa ? (
                  <SlideToggle checked={true} />
                ) : (
                  <SlideToggle />
                )}
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        handleQrCodeDownloadModalShow(bodyItem.numero)
                      }
                    >
                      Download QR Code
                    </Button>
                  </div>
                  <IconButton icon={FiTrash2} size="sm" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <QrCodeDownloadModal
        show={qrCodeDownloadModalShow}
        onHide={handleQrCodeDownloadModalHide}
        isMultiTables={false}
        tableNumber={tableNumber}
      />
    </>
  );
};

export default TablesTable;
