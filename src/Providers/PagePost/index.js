import { createContext, useState } from "react";

export const PagePostContext = createContext();

export const PagePostProvider = ({ children }) => {
  const [infoPostagem, setInfoPostagem] = useState([]);

  return (
    <PagePostContext.Provider value={{ infoPostagem, setInfoPostagem }}>
      {children}
    </PagePostContext.Provider>
  );
};
