import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Internal from "./pages/Internal";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal/:slug" element={<Internal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
