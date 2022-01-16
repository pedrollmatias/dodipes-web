import Button from "react-bootstrap/Button";

const IconLabelButton = ({
  icon: Icon,
  label,
  className = "",
  iconMargin = "me-3",
  variant = "primary",
  onClick = () => {},
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
    >
      <Icon className={iconMargin} size={30} />
      <span>{label}</span>
    </Button>
  );
};

export default IconLabelButton;
