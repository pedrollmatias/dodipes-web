import Form from "react-bootstrap/Form"

import classes from "./SlideToggle.module.scss";

const SlideToggle = ({ checked = false, label }) => {
  return (
    <>
      <label className={classes.switch}>
        <Form.Control type="checkbox" defaultChecked={checked}/>
        <span className={`${classes.slider}`}></span>
      </label>
      {label && <span className="ms-2">{label}</span>}
    </>
  );
};

export default SlideToggle;
