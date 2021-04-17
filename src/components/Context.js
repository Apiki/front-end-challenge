import React, { createContext, useEffect, useState } from "react";
import {
  fetchMorePages,
  fetchCategoryDev,
  fetchForHeader,
} from "../services/API";

export const DataContext = createContext();

function DataProvider(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [qntPage, setQntPage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetchCategoryDev();
      const resHeaders = await fetchForHeader();
      setData(response);
      setQntPage(resHeaders);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMorePages(page);
      setData(response);
    }
    fetchData();
  }, [page]);

  const newPage = () => {
    setPage(page + 1);
  };
  const backToHomePage = () => {
    setPage(1);
  };
  const { children } = props;
  return (
    <DataContext.Provider
      value={{ data, qntPage, page, newPage, backToHomePage }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
