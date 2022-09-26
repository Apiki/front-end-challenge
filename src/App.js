import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from './Pages/Initial';
import Post from './Pages/Post';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/post/:slug" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
