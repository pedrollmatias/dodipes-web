import Button from "react-bootstrap/Button";

import classes from "./ModalActionButton.module.scss";

const ModalActionButton = ({ onClick, children, variant, type }) => {
  return (
    <Button
      className={classes["btn--modal-action"]}
      variant={variant}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ModalActionButton;
