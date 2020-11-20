import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article/:id' render={(props) => <Article {...props} />} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
