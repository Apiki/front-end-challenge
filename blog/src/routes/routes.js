import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Posts from '../pages/Posts';
import FullPost from '../pages/FullPost';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Posts}/>
        <Route path="/:slug" component={FullPost}/>
    </Switch>
);

export default Routes;