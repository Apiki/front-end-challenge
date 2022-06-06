import { Route, Routes as Switch } from 'react-router-dom';
import React from 'react';

import routes from './routes';

function Routes() {
  return (
    <Switch>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Switch>
  );
}

export default Routes;
