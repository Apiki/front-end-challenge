import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from './pages/Home';
import { Post } from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:slug" exact component={Post} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
