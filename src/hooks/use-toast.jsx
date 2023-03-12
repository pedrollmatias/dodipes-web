import { useContext, useState } from "react";
import { ApiErrorContext } from "../contexts/api-error";
import NotificationToast from "../components/UI/NotificationToast";

export const useToast = () => {
  const { setError } = useContext(ApiErrorContext);
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
    setError(undefined);
  };

  const handleShowToast = () => setShowToast(true);

  const _NotificationToast = ({ title, message, bg, autohide, delay }) => (
    <NotificationToast
      title={title}
      message={message}
      bg={bg}
      autohide={autohide}
      delay={delay}
      show={showToast}
      onClose={handleCloseToast}
    />
  );

  return {
    showToast: handleShowToast,
    hideToast: handleCloseToast,
    NotificationToast: _NotificationToast,
  };
};
