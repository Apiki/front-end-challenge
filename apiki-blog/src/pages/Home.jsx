import React, { Suspense } from 'react';
import Pagination from '../components/Pagination';
import ArticleList from '../containers/ArticleList';
import { PageProvider } from '../context/PageContext'

const Home = () => {
  return (
      <PageProvider>
        <ArticleList />
        <Pagination />
      </PageProvider>
  )
};

export default Home;
