import React from "react";
import Header from "./components/Header/Header";
import InternalNews from "./components/InternalPage/InternalNews";
import HomePage from "./pages/HomePage/HomePage";
import './assetes/styles/global.css';

const App = () => (
  <div>
    <Header />
    <HomePage />
    <InternalNews />
  </div>
)

export default App;
