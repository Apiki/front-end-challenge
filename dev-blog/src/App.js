import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article/:id?' render={(props) => <Article {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
