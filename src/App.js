import React from "react";
import Routes from "./routes";

import "./styles.css";

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);


export default App;