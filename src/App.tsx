import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./Router";

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
