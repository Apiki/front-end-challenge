import './App.css';
import BlogProvider from './Provider/Provider';
import InitialPage from './Pages/InitialPage';
import Post from './Components/Post';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <div className="App">
          <Route exact path="/"><InitialPage /></Route>
          <Route path="/post/:slug"><Post/></Route>
        </div>
      </BlogProvider>
    </BrowserRouter>
    
  );
}

export default App;
