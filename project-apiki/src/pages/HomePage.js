import React from 'react';
import Header from '../components/Header';
import ArticlesPrev from '../components/ArticlesPrev';
import Footer from '../components/Footer';
import '../layout/css/sharedStyle.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <ArticlesPrev />
      <Footer />
    </>
  );
}


export default HomePage;
