import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper main__content">
          <h2>404 - Página não encontrada</h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
