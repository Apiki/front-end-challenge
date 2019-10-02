import React from 'react';
import Routes from './routes';
import Header from './components/header/index';
import Footer from './components/footer/index';

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
