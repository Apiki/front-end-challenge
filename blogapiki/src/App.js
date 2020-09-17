import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContextProvider from './service/context';
import Home from './pages/Home';
import Internal from './pages/Internal';
import './style/App.css';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/internal/:id" component={Internal} />
      </Router>
    </ContextProvider>
  );
}

export default App;
