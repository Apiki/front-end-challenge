import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PostListing from "./components/PostListing";
import PostSingle from "./components/PostSingle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostListing />} />
        <Route path="/post/:slug" element={<PostSingle />} />
      </Routes>
    </Router>
  );
}

export default App;
