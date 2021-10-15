import {Home} from './pages/Home'
import {Postagem} from './pages/Postagem'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/postagens/:slug" exact component={Postagem}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
