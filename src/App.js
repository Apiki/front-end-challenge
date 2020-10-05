import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './componets/header';
import Footer from './componets/footer/footer';
import './App.css';
import Home from './Pages/InitialPage';

function App() {
  return (
    <BrowserRouter>
        <div className="backGound"></div>
        <Header />
      <Switch>

        <Route exact path='/:id' component={null} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
