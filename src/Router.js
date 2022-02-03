import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interna from "./pages/interna";
import Inicial from "./pages/inicial";
import axios from "axios";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Inicial />} />
        <Route path="/:slug" element={<Interna />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
