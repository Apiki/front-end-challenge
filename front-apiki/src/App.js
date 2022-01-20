import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes/Routes';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
