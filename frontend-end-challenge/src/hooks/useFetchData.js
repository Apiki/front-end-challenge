import { useCallback, useEffect, useState, useMemo } from 'react';

export default function (callback, ...params) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(1);

  const setParams = useMemo(() => [...params, pagination], [
    params,
    pagination,
  ]);

  /* Sem uso de catch para que erros ocorridos durante a renderização 
  sejam tratados pela API Error Boundaries do React. */
  const getData = useCallback(() => {
    callback(...setParams).then(
      (response) => {
        setIsFetching(false);
        return setData(response);
      },
      (response) => {
        setIsFetching(false);
        return setError(response);
      },
    );
  }, [callback, ...setParams]);

  useEffect(() => {
    setIsFetching(true);
    getData();
    return () => {
      setData(null);
      setIsFetching(false);
      setError(null);
    };
  }, [getData]);

  return { data, isFetching, error, setPagination, pagination };
}
