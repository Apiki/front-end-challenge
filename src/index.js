import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PageProvider } from "./context/page.context";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageProvider>
        <App />
      </PageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
