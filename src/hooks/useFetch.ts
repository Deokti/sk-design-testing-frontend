import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Response {
  data: null | unknown[] | unknown;
  isLoading: boolean;
  error: null | string;
}

const DEFAULT = {
  data: null,
  isLoading: false,
  error: null,
};

type Query = Promise<AxiosResponse<unknown, any>>;

export const useFetch = <T>(query: Query) => {
  const [response, setResponse] = useState<Response>(DEFAULT);

  useEffect(() => {
    setResponse({ data: null, isLoading: true, error: "" });
    init();
  }, []);

  const init = async () => {
    try {
      const response = await query;
      setResponse({
        isLoading: false,
        error: "",
        data: response.data as T,
      });
    } catch (error) {
      console.error("[USE_FETCH]:", error);
      setResponse({
        data: null,
        isLoading: false,
        error: (error as Error).message,
      });
    }
  };

  return {
    data: response.data as T,
    isLoading: response.isLoading,
    error: response.error,
  };
};
