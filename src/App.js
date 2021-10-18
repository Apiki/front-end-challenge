import logo from './logo.svg';
import './App.css';
import "../src/css/main.css";

import PaginaPrincipal from './components/pagina-principal';
import Footer from './components/footer/footer';
import Cabecalho from './components/cabecalho/cabecalho';

function App() {
  return (
    <>
    <div className="container">
     <Cabecalho />
      <PaginaPrincipal></PaginaPrincipal>
    </div>
    <Footer />
    </>
  );
}

export default App;
