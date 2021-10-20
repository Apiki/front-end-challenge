import React from 'react';
import HomeComp from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div>
        <HomeComp />
      </div>
      <Footer />
    </>
  );
}

export default Home;
