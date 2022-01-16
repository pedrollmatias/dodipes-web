import Button from "react-bootstrap/Button";

const IconLabelButton = ({
  icon: Icon,
  label,
  className = "",
  iconMargin = "me-3",
  variant = "primary",
  onClick = () => {},
  disabled = false
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className={iconMargin} size={30} />
      <span>{label}</span>
    </Button>
  );
};

export default IconLabelButton;
