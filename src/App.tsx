import React from "react";

import { Router } from "~/configs/routers/Router";
import { GlobalStyle } from "~/configs/style/GlobalStyle";

function App() {
    return (
        <div className="App">
            <Router />
            <GlobalStyle />
        </div>
    );
}

export default App;
