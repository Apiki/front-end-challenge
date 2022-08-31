import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home";
import Page from "./views/Page/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="page">
        <Route path=":slug" element={<Page />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
