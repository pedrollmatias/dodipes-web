import { useState } from "react";
import Container from "react-bootstrap/Container";

import { FiMoreHorizontal, FiDownloadCloud } from "react-icons/fi";
import { SiAirtable } from "react-icons/si";

import SectionTitle from "../../components/UI/SectionTitle";
import IconLabelButton from "../../components/UI/IconLabelButton";
import TablesTable from "./TablesTable";
import AddTableModal from "./AddTableModal";

const ActionButtons = () => {
  const [isIntervalModal, setIsIntervalModal] = useState(false);
  const [addTableModalShow, setAddTableModalShow] = useState(false);

  const handleAddTableModalShow = (isInterval) => {
    setAddTableModalShow(true);
    setIsIntervalModal(isInterval);
  };
  const handleAddTableModalHide = () => setAddTableModalShow(false);

  return (
    <>
      <div className="me-3">
        <IconLabelButton
          icon={FiMoreHorizontal}
          label="Adicionar intervalo"
          onClick={() => handleAddTableModalShow(true)}
        />
      </div>

      <div className="me-3">
        <IconLabelButton
          icon={SiAirtable}
          label="Adicionar mesa"
          onClick={() => handleAddTableModalShow(false)}
        />
      </div>

      <IconLabelButton
        icon={FiDownloadCloud}
        label="Download QR Codes"
        disabled={true}
      />

      <AddTableModal
        show={addTableModalShow}
        onHide={handleAddTableModalHide}
        isInterval={isIntervalModal}
      />
    </>
  );
};

const TablesQrCodes = () => {
  return (
    <Container className="py-5 min-height-100">
      <SectionTitle>Mesas & QR Codes</SectionTitle>

      <div className="d-flex justify-content-end mb-4">
        <ActionButtons />
      </div>

      <TablesTable />
    </Container>
  );
};

export default TablesQrCodes;
