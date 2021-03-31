import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Provider from './context/Provider';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/details/:slug" component={PostPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
