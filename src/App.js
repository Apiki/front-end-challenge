import { useContext } from "react";

import { PageContext } from "./context/page.context";

import { Routes, Route } from "react-router-dom";

import Home from "./routers/home/home.component";
import InnerPage from "./routers/innerPage/innerPage.component";

function App() {
  const { pageSlug } = useContext(PageContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`${pageSlug}`} element={<InnerPage />} />
    </Routes>
  );
}

export default App;
