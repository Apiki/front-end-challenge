import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ROOT_ELEMENT_ID } from "~utils";
import { App } from "./App";

createRoot(ROOT_ELEMENT_ID!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
