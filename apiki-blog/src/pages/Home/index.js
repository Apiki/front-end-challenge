import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../store/ducks/blog';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs(1));
  }, [dispatch]);


  return (
    <div>
      <h1>This is Home</h1>
      <button onClick={() => dispatch(getAllBlogs(2))}> more...</button>
    </div>
  );
};

export default Home;
