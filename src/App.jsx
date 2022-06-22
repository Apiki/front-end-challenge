import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { PostPage } from "./pages/postPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
