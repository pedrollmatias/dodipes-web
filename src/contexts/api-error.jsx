import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import NotificationToast from "../components/UI/NotificationToast";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const errorCodes = {
  NOT_FOUND: 404,
};

export const ApiErrorProvider = ({ children }) => {
  const location = useLocation();
  const [error, setError] = useState();

  useEffect(() => {
    setError();
  }, [location]);

  const renderContent = () => {
    if (!error) {
      return children;
    }

    if (error?.statusCode === errorCodes.NOT_FOUND) {
      return <NotFoundPage />;
    }

    return (
      <>
        {children}
        <NotificationToast
          bg="danger"
          title={`${error?.statusCode} - ${error?.statusText}`}
          message={error?.message}
        />
      </>
    );
  };

  return (
    <ApiErrorContext.Provider value={{ error, setError }}>
      {renderContent()}
    </ApiErrorContext.Provider>
  );
};

export const ApiErrorContext = createContext({
  error: undefined,
  setError: () => {},
});
