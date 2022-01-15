import { FiEdit } from "react-icons/fi";

import IconButton from "../../../components/UI/IconButton";

import storeLogo from "../../../assets/file-fritas.jpg";

import classes from "./StoreLogo.module.scss";

const StoreLogo = () => {
  return (
    <div className={classes["container--store-logo"]}>
      <img
        className={`${classes["img--store-logo"]}`}
        alt="Logo"
        src={storeLogo}
      />

      <div className={classes["container--btn-edit"]}>
        <IconButton icon={FiEdit} variant="primary" size="lg"/>
      </div>
    </div>
  );
};

export default StoreLogo;
