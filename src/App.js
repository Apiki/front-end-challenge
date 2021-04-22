import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <>
          <main>
            <Route exact path='/'>
              <Home />
            </Route>
          </main>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
