import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Router } from "./Router";
import './scss/base/reset.css';
import './scss/base/grid.scss';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>    
  );
}

export default App;