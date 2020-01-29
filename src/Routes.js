import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./components/header";

import Home from "./pages/home";
import Post from "./pages/post";
import NotFound from "./pages/notFound";

function Routes() {

  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/home" component={Home} />
          <Route path="/post/:slug" component={Post} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;