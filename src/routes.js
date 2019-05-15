import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Posts from './pages/posts';
import Post from './pages/post';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Posts} />
            <Route path='/desenvolvimento/:slug' component={Post} />
        </Switch>
    </BrowserRouter>

);

export default Routes;