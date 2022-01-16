import Button from "react-bootstrap/Button";

const IconLabelButton = ({
  icon: Icon,
  label,
  className = "",
  iconMargin = "me-3",
  variant = "primary",
  onClick = () => {},
  disabled = false,
  size,
  iconSize = 30,
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      <Icon className={iconMargin} size={iconSize} />
      <span>{label}</span>
    </Button>
  );
};

export default IconLabelButton;
