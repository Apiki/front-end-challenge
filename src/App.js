import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';

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
            <Route path='/post/:slug'>
              <Post />
            </Route>
          </main>
          <Footer />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
