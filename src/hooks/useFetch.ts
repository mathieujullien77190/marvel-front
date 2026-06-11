import { useEffect, useState } from "react";

export const useFetch = <T>(fetcher: () => Promise<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      setIsError(undefined);
      fetcher()
        .then((responseData) => {
          setIsLoaded(true);
          setData(responseData);
        })
        .catch((error) => {
          setIsError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    run();
  }, [fetcher]);

  return { data, isLoading, isLoaded, isError };
};
