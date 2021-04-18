import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Intern from './Pages/Intern';
import DataProvider from './Provider/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/intern" component={ Intern } />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
