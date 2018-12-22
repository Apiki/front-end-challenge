import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Detail from "./components/detail";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:p" component={Detail} />
            <Route path="*" component={Home}  />
        </Switch>
    </BrowserRouter>
);

export default Routes;