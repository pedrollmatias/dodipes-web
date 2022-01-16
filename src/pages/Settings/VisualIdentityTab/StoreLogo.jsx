import { useState } from "react";

import { FiEdit } from "react-icons/fi";

import IconButton from "../../../components/UI/IconButton";
import SectionTitle from "../../../components/UI/SectionTitle";

import storeLogo from "../../../assets/store-logo.png";

import classes from "./StoreLogo.module.scss";
import EditStoreLogoModal from "./EditStoreLogoModal";

const StoreLogo = () => {
  const [editStoreLogoModalShow, setEditStoreLogoModalShow] = useState(false);

  const handleEditStoreLogoModalShow = () => setEditStoreLogoModalShow(true);
  const handleEditStoreLogoModalHide = () => setEditStoreLogoModalShow(false);

  return (
    <>
      <div className={`${classes["container--store-logo"]} mb-4`}>
        <img
          className={`${classes["img--store-logo"]}`}
          alt="Logo"
          src={storeLogo}
        />

        <div className={classes["container--btn-edit"]}>
          <IconButton icon={FiEdit} variant="primary" size="lg" onClick={handleEditStoreLogoModalShow}/>
        </div>
      </div>

      <SectionTitle marginBottom="mb-4">
        Logotipo do estabelecimento
      </SectionTitle>

      <p className="text-center">
        Imagem que será exibida no cardápio e nas buscas no aplicativo
      </p>

      <EditStoreLogoModal show={editStoreLogoModalShow} onHide={handleEditStoreLogoModalHide}/>
    </>
  );
};

export default StoreLogo;
