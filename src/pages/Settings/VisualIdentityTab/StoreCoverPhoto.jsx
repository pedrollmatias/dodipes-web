import { useState } from "react";
import { BiImage } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import IconButton from "../../../components/UI/IconButton";
import SectionTitle from "../../../components/UI/SectionTitle";
import ImageEditorModal from "./ImageEditorModal";
import classes from "./StoreCoverPhoto.module.scss";

const StoreCoverPhoto = ({ image, setImage }) => {
  const [imageEditorModalShow, setImageEditorModalShow] = useState(false);

  const handleImageEditorModalShow = () => setImageEditorModalShow(true);
  const handleImageEditorModalHide = () => setImageEditorModalShow(false);

  return (
    <>
      <div className={`${classes["container--store-cover-photo"]} mb-4`}>
        {image ? (
          <img
            className={`${classes["img--store-cover-photo"]}`}
            alt="Logo"
            src={image}
          />
        ) : (
          <div className="d-flex justify-content-center align-items-center h-100">
            <BiImage size={100} />
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

      <SectionTitle className="mb-4">Foto de capa</SectionTitle>

      <p className="text-center">
        Imagem que será exibida durante a abertura de conta pelos clientes
      </p>

      <ImageEditorModal
        title="Selecionar imagem de capa"
        show={imageEditorModalShow}
        onHide={handleImageEditorModalHide}
        image={image}
        setImage={setImage}
      />
    </>
  );
};

export default StoreCoverPhoto;
