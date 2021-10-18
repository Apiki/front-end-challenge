import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Post from "../pages/Post";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post/:postSlug" component={Post} />
    </Switch>
  );
}
