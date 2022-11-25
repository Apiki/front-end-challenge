import React from "react";
import { api } from "../api";

import { TPost } from "../types";

export const useGetPost = ({
  params,
  url
}: TUseFetching): {
  isLoading: boolean;
  data: TPost;
  error: any;
} => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<TPost>();
  const [error, setError] = React.useState<any>();
  const getData = React.useCallback(async () => {
    try {
      const { data } = await api.get(url, {
        params
      });

      setData(data[0]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [params, url]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return {
    isLoading,
    error,
    data
  };
};

type TUseFetching = {
  url: string;
  params?: any;
};
