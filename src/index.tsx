// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Styles and contents
import App from "./App";

// Main
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);