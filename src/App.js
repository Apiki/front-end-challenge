import MainPage from "./components/MainPage";
import BlogPost from "./components/BlogPost";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/:slug" element={<BlogPost/>} />
    </Routes>
  );
}

export default App;
