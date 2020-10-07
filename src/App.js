import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './componets/header';
import Footer from './componets/footer/footer';
import './App.css';
import Home from './Pages/InitialPage';
import Interna from './Pages/internal';
import NotFound from './Pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <div className="backGound"></div>
      <Header />
      <Switch>
        <Route path='/NotFound'component={NotFound} />
        <Route exact path='/:slug' component={Interna} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
