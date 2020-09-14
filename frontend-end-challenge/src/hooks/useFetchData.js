import { useEffect, useState } from 'react';

export default function () {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  return { data, isFetching, error };
}
