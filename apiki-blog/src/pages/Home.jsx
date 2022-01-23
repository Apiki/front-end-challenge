import React, { Suspense } from 'react';
import Pagination from '../components/Pagination';
import ArticleList from '../containers/ArticleList';

const Home = () => {
  return (
      <>
        <ArticleList />
        <Pagination />
      </>
  )
};

export default Home;
