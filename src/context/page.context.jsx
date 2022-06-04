import { createContext, useState } from "react";

export const PageContext = createContext({
  clickedOn: [false, false],
  setClickedOn: () => {},

  pageSlug: "",
  setPageSlug: () => {},
});

export const PageProvider = ({ children }) => {
  const [clickedOn, setClickedOn] = useState([false, false]);
  const [pageSlug, setPageSlug] = useState("/");

  const value = { clickedOn, setClickedOn, pageSlug, setPageSlug };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
