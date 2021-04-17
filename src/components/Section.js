import React from "react";
import Home from "./section/Home";
import Interna from "./section/Interna";
import { Route } from "react-router-dom";

function Section(){
    return (
      <section>
        <Route exact path="/" component={Home} />
        <Route exact path="/interna/:id" component={Interna} />
      </section>
    );
  }

export default Section;
