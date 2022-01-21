import React, { Suspense } from 'react';
import Pagination from '../components/Pagination';
import ArticleList from '../containers/ArticleList';
import { PageProvider } from '../context/PageContext'

const Home = () => {
  return (
      <PageProvider>
          <Suspense fallback='<h1>Loading</h1>'>
            <ArticleList />
            <Pagination />
          </Suspense>
      </PageProvider>
  )
};

export default Home;
