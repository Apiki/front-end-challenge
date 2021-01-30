import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../store/ducks/blog';
import { useHistory } from 'react-router-dom';
import BlogCard from '../../components/blogCard/BlogCard';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { blogs, isFetching, totalPages } = useSelector(
    (state) => state.blogReducer,
  );

  useEffect(() => {
    dispatch(getAllBlogs(1));
  }, [dispatch]);

  const [page, setPage] = useState(1);

  const handleRedirect = (blogSlug) => history.push(`/${blogSlug}`);

  const handelClick = () => {
    dispatch(getAllBlogs(2));
    setPage((prevState) => prevState + 1);
  };

  if (isFetching || typeof blogs === 'undefined') return <h2>Carregando...</h2>;

  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index} onClick={() => handleRedirect(blog.slug)}>
          <BlogCard blog={blog} />
        </div>
      ))}
      <button onClick={() => handelClick()} disabled={page === totalPages}>
        Carregar mais...
      </button>
      <h2>
        page {page}/{totalPages}
      </h2>
    </div>
  );
};

export default Home;
