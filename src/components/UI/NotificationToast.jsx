import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import { useContext, useState } from "react";
import { ApiErrorContext } from "../../contexts/api-error";
import classes from "./NotificationToast.module.scss";

const NotificationToast = ({
  title,
  message,
  bg,
  autohide = true,
  delay = 7000,
}) => {
  const { setError } = useContext(ApiErrorContext);
  const [showToast, setShowToast] = useState(true);

  const handleToastClose = () => {
    setShowToast(false);
    setError(undefined);
  };

  return (
    <ToastContainer className="p-5" position="top-end">
      <Toast
        className={classes["notification-toast"]}
        bg={bg}
        show={showToast}
        onClose={handleToastClose}
        autohide={autohide}
        delay={delay}
        animation
      >
        <Toast.Header className={classes["header"]}>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default NotificationToast;
