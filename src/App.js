import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import PostCard from './pages/PostCard';
import './style/main.css'

class App extends React.Component {

  render() {
   
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={PostCard} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
