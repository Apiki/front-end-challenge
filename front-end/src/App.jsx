import React from 'react';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Home}/>
      </Switch>

    </div>
  );
}

export default App;
