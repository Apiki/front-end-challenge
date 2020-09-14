import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
 return(
   <Router>
     <Switch>
       <Route path="/post/:slug">
          <PostPage/>
        </Route>
        <Route path="/:page">
         <HomePage/>
        </Route>
        <Route path="/">
         <HomePage/>
        </Route>
     </Switch>
   </Router>
 );
}

export default App;
