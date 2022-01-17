import { FiEdit } from "react-icons/fi";

import IconButton from "../../../components/UI/IconButton";
import SectionTitle from "../../../components/UI/SectionTitle";

import storeCoverPhoto from "../../../assets/cover-photo.jpg";

import classes from "./StoreCoverPhoto.module.scss";

const StoreCoverPhoto = () => {
  return (
    <>
      <div className={`${classes["container--store-cover-photo"]} mb-4`}>
        <img
          className={`${classes["img--store-cover-photo"]}`}
          alt="Cover"
          src={storeCoverPhoto}
        />

        <div className={classes["container--btn-edit"]}>
          <IconButton icon={FiEdit} variant="primary" size="lg" />
        </div>
      </div>

      <SectionTitle className="mb-4">Foto de capa</SectionTitle>

      <p className="text-center">
        Imagem que será exibida durante a abertura de conta pelos clientes
      </p>
    </>
  );
};

export default StoreCoverPhoto;
