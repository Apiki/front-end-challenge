import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Inicial from './pages/inicial';
import Interna from './pages/interna';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Inicial} />
        <Route exact path='/:slug' component={Interna} />
      </BrowserRouter>
      {/* <Inicial/> */}
    </div>
  );
}

export default App;
