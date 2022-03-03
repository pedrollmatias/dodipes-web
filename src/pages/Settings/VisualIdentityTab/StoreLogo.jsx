import { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import IconButton from "../../../components/UI/IconButton";
import SectionTitle from "../../../components/UI/SectionTitle";

import classes from "./StoreLogo.module.scss";
import ImageEditorModal from "./ImageEditorModal";

const StoreLogo = ({ image, setImage }) => {
  const [imageEditorModalShow, setImageEditorModalShow] = useState(false);

  const handleImageEditorModalShow = () => setImageEditorModalShow(true);
  const handleImageEditorModalHide = () => setImageEditorModalShow(false);

  return (
    <>
      <div className={`${classes["container--store-logo"]} mb-4`}>
        {image ? (
          <img
            className={`${classes["img--store-logo"]}`}
            alt="Logo"
            src={image}
          />
        ) : (
          <div className="d-flex justify-content-center align-items-center h-100">
            <IoRestaurantOutline size={100} />
          </div>
        )}

        <div className={classes["container--btn-edit"]}>
          <IconButton
            icon={FiEdit}
            variant="primary"
            size="lg"
            onClick={handleImageEditorModalShow}
          />
        </div>
      </div>

      <SectionTitle className="mb-4">Logotipo</SectionTitle>

      <p className="text-center">
        Imagem que será exibida no cardápio e nas buscas no aplicativo
      </p>

      <ImageEditorModal
        title="Selecionar imagem do logotipo"
        show={imageEditorModalShow}
        onHide={handleImageEditorModalHide}
        image={image}
        setImage={setImage}
      />
    </>
  );
};

export default StoreLogo;
