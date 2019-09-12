import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from "./pages/main";
import Post from "./pages/post";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/posts/:slug" component={Post} />
        </Switch>
    </BrowserRouter>
);

export default Routes;