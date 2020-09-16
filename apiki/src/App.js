import React from "react";
import { Route, Switch } from "react-router-dom";
import PostPage from "./pages/PostPage/PostPage";
import HomePage from "./pages/HomePage/HomePage";
import AplicationProvider from "./context/ContextAplication";
import "./assetes/styles/global.css";

const App = () => (
  <AplicationProvider>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:slug" component={PostPage} />
    </Switch>
  </AplicationProvider>
);

export default App;
