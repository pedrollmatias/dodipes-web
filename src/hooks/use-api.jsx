import { useState, useContext } from "react";
import { ApiErrorContext } from "../contexts/api-error-context";

export const useApi = (service) => {
  const { setError } = useContext(ApiErrorContext);
  const [httpRequest] = useState(service);

  return async (params) => {
    try {
      const { data } = await httpRequest(params);

      return data;
    } catch (error) {
      const { status, statusText } = error.response;
      const { message } = error.response.data;

      setError({
        statusCode: status,
        statusText,
        message,
      });

      throw error;
    }
  };
};
