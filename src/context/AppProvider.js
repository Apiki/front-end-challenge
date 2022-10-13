import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [info, setInfo] = useState({});
  const [posts, setPosts] = useState([]);

  const contextValue = {
    info,
    setInfo,
    posts,
    setPosts,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}