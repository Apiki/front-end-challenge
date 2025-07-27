import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import './assets/styles/global.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
