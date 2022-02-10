import { useState, useContext } from "react";
import { ApiErrorContext } from "../contexts/api-error-context";
import { LoadingContext } from "../contexts/loading-context";

export const useApi = (service) => {
  const { setError } = useContext(ApiErrorContext);
  const { setIsLoading } = useContext(LoadingContext);
  const [httpRequest] = useState(service);

  return async (params) => {
    setIsLoading(true);

    try {
      const { data } = await httpRequest(params);

      setIsLoading(false);

      return data;
    } catch (error) {
      const { status, statusText } = error.response;
      const { message } = error.response.data;

      setError({
        statusCode: status,
        statusText,
        message,
      });

      setIsLoading(false);

      throw error;
    }
  };
};
