import { Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";

function Routes() {
  return (
    <Switch>
      <Route path="/post-details" component={ PostDetails } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
};

export default Routes;