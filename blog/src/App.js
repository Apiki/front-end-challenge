import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BlogStorage } from './Components/BlogContext';
import { Home } from './Components/Home';
import { Post } from './Components/Post';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BlogStorage>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="Homeslug/:slug" element={<Post />} component />
          </Routes>
          <Footer />
        </BlogStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
