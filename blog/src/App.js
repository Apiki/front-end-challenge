import './App.css';
import NotFound from './Ajuda/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BlogStorage } from './BlogContext';
import { Home } from './Components/Paginas/Home';
import { Post } from './Components/Paginas/Post';
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
              {/* <Route path=":navPage/" element={<Home />} /> */}
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
