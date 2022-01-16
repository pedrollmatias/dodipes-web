import Form from "react-bootstrap/Form";

import classes from "./Slider.module.scss"

const Slider = ({ min, max, step, onChange = () => {} }) => {
  return (
    <Form.Control
      type="range"
      className={`${classes.slider} form-range`}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};

export default Slider;
