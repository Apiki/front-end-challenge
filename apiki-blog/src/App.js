import './App.css';
import Home from './Pages/Home';
import Notice from './Pages/Notice';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Notice />} />
    </Routes>
  );
}

export default App;
