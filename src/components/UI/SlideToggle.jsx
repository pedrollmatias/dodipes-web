import Form from "react-bootstrap/Form";

import classes from "./SlideToggle.module.scss";

const SlideToggle = ({
  checked = false,
  label,
  isInvalid,
  formRegistration = {},
}) => {
  return (
    <div className="d-flex align-items-center">
      <label className={classes.switch}>
        <Form.Control
          {...formRegistration}
          type="checkbox"
          defaultChecked={checked}
          isInvalid={isInvalid}
        />
        <span className={`${classes.slider}`}></span>
      </label>
      {label && <span className="ms-2">{label}</span>}
    </div>
  );
};

export default SlideToggle;
