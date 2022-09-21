import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PagePostContext = createContext();

export const PagePostProvider = ({ children }) => {
  const [infoPostagem, setInfoPostagem] = useState([]);
  const [slug, setSlug] = useState("");

  /* const Info = async () => {
    await axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then((response) => {
        setInfoPostagem(response.data[0]);
      });
  };

  useEffect(() => {
    Info();
  }, Info); */

  return (
    <PagePostContext.Provider
      value={{ infoPostagem, setSlug, setInfoPostagem }}
    >
      {children}
    </PagePostContext.Provider>
  );
};
