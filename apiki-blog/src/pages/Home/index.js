import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../store/ducks/blog';

const Home = () => {
  const dispatch = useDispatch();
  const {blogs, isFetching} = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getAllBlogs(1));
  }, [dispatch]);

  const [page, setPage] = useState(1);

  const handelClick = () => {
    dispatch(getAllBlogs(2));
    setPage((prevState) => prevState + 1);
  };
  if (isFetching) return <h2>Carregando...</h2>;
  return (
    <div>
      <h1>This is Home</h1>
      {blogs.map((map) => (
        <h2>{map.id}</h2>
      ))}
      <button onClick={() => handelClick()}> more...</button>
      <h2>page {page}</h2>
    </div>
  );
};

export default Home;
