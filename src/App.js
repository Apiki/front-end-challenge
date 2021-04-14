import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Comp from './components/Comp';
import Interna from './components/Interna';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Comp} />
      <Route exact path="/:slug" component={Interna} />
    </BrowserRouter>
  </div>
  );
}

export default App;
