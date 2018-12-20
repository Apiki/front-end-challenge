import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Content from './content';
import News from './news';
import Footer from './footer'
import Header from './header'
import Hero from './hero'
import Newsletter from './newsletter'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={() =>
        <div className="App">
          <Header />
          <Hero />
          <News />
          <Newsletter />
          <Footer />
        </div>

      } exact />
      <Route path="/content/:id" component={ id =>
        <div className="App">
          <Header />
          <Content id={id} />
          <Newsletter />
          <Footer />
        </div>
      }/>

    </Switch>
  </BrowserRouter>
);

export default Router;