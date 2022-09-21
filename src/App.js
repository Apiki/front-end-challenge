import { Route, Switch } from "react-router-dom";
import { Index } from "./Pages";
import { Postagem } from "./Pages/Postagem";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/post/:slug">
          <Postagem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
