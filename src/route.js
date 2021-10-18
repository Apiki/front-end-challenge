import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Interna from './components/interna/index';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/:slug" exact component={Interna} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;