import React, { useContext, useEffect } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import Button from '../components/Button';
import PostsList from '../components/PostsList';
import getAll from '../services/getAll';

const MainPage = () => {
  const { loading, setLoading, setData, continous, setContinous } = useContext(ApikiBlogContext);
  useEffect(() => {
    if (!continous) {
      getAll().then((response) => {
        setData(response);
        setContinous(true);
        setLoading(false);
      });
    }
  },[]);

  return (
    !loading ?
      <div>
        <h1 className='main-page-title'>Bem vindo ao blog APIKI!</h1>
        <PostsList />
        <Button />
        <footer className='details-footer'>APIKI BLOG</footer>
      </div> : <div>Loading...</div>
  );
};

export default MainPage;
