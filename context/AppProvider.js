import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ data = {}, children }) {
  const [posts, setPosts] = useState(data);

  const contextValue = {
    posts,
    setPosts,
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}