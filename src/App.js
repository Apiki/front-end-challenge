import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Home from './Pages/Home';
import InnerPage from './Pages/InnerPage';
import Provider from './context/Provider';
import './App.css';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path='/:slug' component={ InnerPage }/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
