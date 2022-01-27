import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import News from "./components/News";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<News />} />
    </Routes>
  );
}

export default App;
