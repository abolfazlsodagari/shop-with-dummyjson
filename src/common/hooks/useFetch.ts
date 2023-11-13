import { useEffect, useState } from "react";
import { axios } from "@/api";
import { AxiosResponse } from "axios";

interface UseFetchData<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

function useFetch<T>(url: string): UseFetchData<T> {
  // data state
  const [data, setData] = useState<T | null>(null);
  // error state
  const [error, setError] = useState<Error | null>(null);
  // loading state
  const [isLoading, setIsLoading] = useState(true);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  // return data, error and loading
  return { data, error, isLoading };
}

export default useFetch;
