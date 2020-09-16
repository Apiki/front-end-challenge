import React, { createContext, useState } from "react";
import RequestAPI from "../service/RequestAPI";
import { RequestNumberOfPages } from "../service/RequestAPI";

export const ContextAplication = createContext();

const URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
const numberOfPages = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2";
const newSlug = (slug) => `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
const enpoint = (e) => `&page=${e}`;

const AplicationProvider = ({ children }) => {
  const [Home, setHome] = useState([]);
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [actualPage, setActualPage] = useState(2);
  const [newInformation, setnewInformation] = useState([]);

  const getHomePage = async () => {
    RequestAPI(URL, "")
      .then(({ data }) => setHome(data))
      .catch((err) => err);
  };

  const nextPage = async (page) => {
    RequestAPI(URL, enpoint(page))
      .then(({ data }) => {
        setPages(data);
      })
      .catch((err) => err);
  };

  const getNewSlug = (slug) => {
    RequestAPI(newSlug(slug), "")
      .then(({ data }) => setnewInformation(data))
      .catch((err) => err);
  };

  const numberPages = async () =>
    RequestNumberOfPages(numberOfPages)
      .then((number) => setTotalPages(number))
      .catch((err) => err);

  const context = {
    Home,
    getHomePage,
    nextPage,
    pages,
    setPages,
    setHome,
    numberPages,
    totalPages,
    setActualPage,
    actualPage,
    newInformation,
    getNewSlug,
  };
  return (
    <ContextAplication.Provider value={context}>
      {children}
    </ContextAplication.Provider>
  );
};

export default AplicationProvider;
