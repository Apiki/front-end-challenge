import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Single from "./Single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post/:slug" element={<Single />} />
    </Routes>
  );
}

export default App;
