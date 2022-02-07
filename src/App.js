import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Intern from "./Pages/Intern";
import Main from "./Pages/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact element={<Main />} />
          <Route path="/:slug" element={<Intern />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
