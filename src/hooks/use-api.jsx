import { useState, useContext, useCallback } from "react";
import { ApiErrorContext } from "../contexts/api-error";

export function useApi({ service }) {
  const { error, setError } = useContext(ApiErrorContext);
  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (params = {}) => {
      setResult(undefined);
      setError(null);
      setLoading(true);

      try {
        const { data } = await service(params);

        setResult(data);
      } catch (error) {
        const { status, statusText } = error.response;
        const message = error.response?.data;

        setError({
          statusCode: status,
          statusText,
          message,
        });
      }

      setLoading(false);
    },
    [service, setError]
  );

  const response = { result, loading, error };

  return [response, fetchData];
}
