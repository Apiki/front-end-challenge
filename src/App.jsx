import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main';
import ContentPage from './pages/content';
import routes from './routes';
import style from './App.css';

function App() {
  return (
    <Switch>
      <Route exact path={routes.main}>
        <MainPage />
      </Route>
      <Route path={routes.content}>
        <ContentPage />
      </Route>

    </Switch>
  );
}

export default App;
