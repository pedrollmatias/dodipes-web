import Button from "react-bootstrap/Button";

import classes from "./IconButton.module.scss";

const sizeIconEnum = {
  sm: 23,
  md: 25,
  lg: 30,
};

const IconButton = ({
  icon: Icon,
  onClick = () => {},
  variant = "light",
  type = "button",
  size = "md",
}) => {
  console.log(size);
  return (
    <Button
      className={`${classes["btn--icon"]} ${classes[variant]} ${classes[size]}`}
      onClick={onClick}
      type={type}
    >
      <Icon size={sizeIconEnum[size]} />
    </Button>
  );
};

export default IconButton;
