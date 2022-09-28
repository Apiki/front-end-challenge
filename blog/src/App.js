import './App.css';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BlogStorage } from './Components/BlogContext';
import { Home } from './Components/Home';
import { Post } from './Components/Post';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <BlogStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":slug" element={<Post />} component />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BlogStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
