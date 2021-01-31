import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
