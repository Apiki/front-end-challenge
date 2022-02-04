import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact element={<Main />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
