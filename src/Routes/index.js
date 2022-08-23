import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/screens/Home';
import Sobre from '../pages/screens/Sobre';
import Single from '../pages/screens/Single';

const PublicRoute = ({ ...rest }) => {
    return <Route {...rest} />
}

export const Routes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/sobre" component={Sobre} />
            <PublicRoute path="/:slug" component={Single} />
        </Switch>
    )
}