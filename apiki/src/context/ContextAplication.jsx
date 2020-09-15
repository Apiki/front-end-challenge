import React, { createContext, useState } from "react";
import RequestAPI from "../service/RequestAPI";
import { RequestNumberOfPages } from "../service/RequestAPI";

export const ContextAplication = createContext();

const URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
const numberOfPages =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2";
const internalNews =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas";
const enpoint = (e) => `&page=${e}`;

const AplicationProvider = ({ children }) => {
  const [Home, setHome] = useState([]);
  const [Internal, setInternal] = useState([]);
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [actualPage, setActualPage] = useState(2);

  const getHomePage = async () => {
    RequestAPI(URL, "")
      .then(({ data }) => setHome(data))
      .catch((err) => err);
  };

  const getInternalPage = async () => {
    RequestAPI(internalNews, "")
      .then(({ data }) => setInternal(data))
      .catch((err) => err);
  };

  const nextPage = async (page) => {
    RequestAPI(URL, enpoint(page))
      .then(({ data }) => {
        setPages(data);
      })
      .catch((err) => err);
  };

  const numberPages = async () =>
    RequestNumberOfPages(numberOfPages)
      .then((number) => setTotalPages(number))
      .catch((err) => err);

  const context = {
    Home,
    Internal,
    getHomePage,
    nextPage,
    pages,
    setPages,
    setHome,
    numberPages,
    totalPages,
    setActualPage,
    actualPage,
    getInternalPage,
  };
  return (
    <ContextAplication.Provider value={context}>
      {children}
    </ContextAplication.Provider>
  );
};

export default AplicationProvider;
