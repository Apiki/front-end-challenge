import "./App.css";
import Header from "./Components/header/Header";
import { InitialPage } from "./Pages/initialPage/InitialPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { InternalPage } from "./Pages/internalPage/InternalPage";
import { Footer } from "./Components/footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/:slug" element={<InternalPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
