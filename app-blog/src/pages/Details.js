import React from 'react';
import DetailsComp from '../components/Details';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/details.css';

function Details() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column-reverse bg-light">
        <div id='exp' className='d-flex align-items-center flex-column mx-5 mb-5'></div>
        <DetailsComp />
      </div>
      <Footer />
    </>
  );
}

export default Details;
