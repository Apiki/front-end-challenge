import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import App from "./App";

WebFont.load({
    google: {
        families: ["Montserrat:400,700", "sans-serif"],
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
