import '../src/Style/style.css'
import Home from './Pages/Home';
import Notice from './Pages/Notice';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <header>
      <a href="/" id="home-menu">
        <img src="/home.png" alt="Home" width="65" height="80" />
        <h1>Home</h1>
      </a>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Notice />} />
    </Routes>
    </>
  );
}

export default App;
