import './App.css';
import Home from './Pages/Home';
import Notice from './Pages/Notice';
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Link to="/"><h1>Home</h1></Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Notice />} />
    </Routes>
    </>
  );
}

export default App;
