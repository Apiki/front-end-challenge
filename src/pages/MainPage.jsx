import React, { useContext, useEffect } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import getAll from '../services/getAll';
import PostsList from '../components/PostsList';
import Button from '../components/Button';

const MainPage = () => {
  const { loading, setLoading, setData } = useContext(ApikiBlogContext);
  useEffect(() => {
    getAll().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  return (
    !loading ?
      <div>
        <PostsList />
        <Button />
      </div> : <div>Loading...</div>
  );
};

export default MainPage;
