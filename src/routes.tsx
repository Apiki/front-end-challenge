import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicial from './pages/Inicial';
import Interna from './pages/Interna';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Inicial} />
    <Route path="/:slug" exact component={Interna} />
  </Switch>
);

export default Routes;
