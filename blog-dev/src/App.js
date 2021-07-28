import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
