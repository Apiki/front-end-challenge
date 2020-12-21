import './App.css';
import Provider from './context/apikiProvider';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/post-details" component={ Details } />
      </Switch>
    </Provider>
  );
}

export default App;
