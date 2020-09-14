import { useCallback, useEffect, useState } from 'react';

export default function (callback, ...params) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  /* Sem uso de catch para que erros ocorridos durante a renderização 
  sejam tratados pela API Error Boundaries do React. */
  const getData = useCallback(() => {
    callback(...params).then(
      (response) => {
        setData(response);
        return setIsFetching(false);
      },
      (response) => {
        setError(response);
        return setIsFetching(false);
      },
    );
  }, [callback]);

  useEffect(() => {
    setIsFetching(true);
    getData();
    return () => {
      setData(null);
      setIsFetching(false);
      setError(null);
    };
  }, [getData]);

  return { data, isFetching, error };
}
