import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useBlogApikiContext as Provider } from './hooks/blogApikiContext';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/:articleTitle' component={ArticlePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
