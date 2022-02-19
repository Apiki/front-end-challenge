import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsListArea from './components/PostsListArea';
import Post from './components/Post';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <div className="postsArea--titleArea">
                    <h1 className="postsArea--title">Veja nossas últimas postagens</h1>
                </div>
                <PostsListArea />
            </Route>
            <Route exact path="/&slug=:slug">
                <Post />
            </Route>
            <Route path="*">
                <div className='NotFound'>Não encontramos esta página</div>
            </Route>
        </Switch>
    );
};