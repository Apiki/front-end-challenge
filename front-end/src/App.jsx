import React from 'react';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterProperty from './components/RegisterProperty';
import DetailsProperty from './components/DetailsProperty';
import UpdateProperty from './components/UpdateProperty';

function App() {
  return (
    <div className="">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={RegisterProperty}/>
        <Route path="/property/:id" component={DetailsProperty}/>
        <Route path="/update/:id" component={UpdateProperty}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
