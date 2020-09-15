import React, { createContext, useState } from "react";
import RequestAPI from "../service/RequestAPI";

export const ContextAplication = createContext();

const URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
const INTERNAL_ENDPOINT = "&page=2";

const AplicationProvider = ({ children }) => {
  const [Home, setHome] = useState([]);
  const [Internal, setInternal] = useState([]);

  const getHomePage = async () => {
    RequestAPI(URL, "")
      .then(({ data }) => setHome(data))
      .catch((err) => err);
  };

  const getInternalPage = async () => {
    RequestAPI(URL, INTERNAL_ENDPOINT)
      .then(({ data }) => setInternal(data))
      .catch((err) => err);
  };

  const context = {
    Home,
    Internal,
    getHomePage,
    getInternalPage,
  };
  return (
    <ContextAplication.Provider value={context}>
      {children}
    </ContextAplication.Provider>
  );
};

export default AplicationProvider;
