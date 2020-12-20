import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//componentes propios
import Header from "./componentes/head/Header";
import FixHeader from "./componentes/head/FixHeader";
import Headline from "./componentes/head/HeadLine";
import Cards from "./componentes/Cards/Cards";
import Noticias from "./componentes/Noticias/Noticias";


function App() {
  return (
    <Router>
      <Header />
      <FixHeader />
      <Headline />

      <Switch>
      <Route path="/Cards/:slug">
          <Noticias/>

        </Route>

        <Route path="/">
          <Cards/>
          
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
