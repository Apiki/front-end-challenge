import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../store/ducks/blog';
import { useHistory } from 'react-router-dom';
import BlogCard from '../../components/blogCard/BlogCard';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import SeoHelmet from '../../components/SeoHelmet/SeoHelmet';
import './index.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Getting the list of all post from the reducer
  const { blogs, isFetching, totalPages } = useSelector(
    (state) => state.blogReducer,
  );

  // when loading page, the API is fetched to return the first page
  useEffect(() => {
    dispatch(getAllBlogs(1));
  }, [dispatch]);

  //this set the current API page fetched
  const [page, setPage] = useState(1);

  const handleRedirect = (blogSlug) => history.push(`/${blogSlug}`);

  const handelClick = () => {
    dispatch(getAllBlogs(2));
    setPage((prevState) => prevState + 1);
  };

  if (isFetching) return <Loading />;

  return (
    <div>
      <SeoHelmet
        title={'Blog ApiKi Desenvolvimento WordPress'}
        description={'Blog de conteúdo sobre WordPress.'}
      ></SeoHelmet>
      <Header></Header>
      <div className="home__main">
        <div className="home__title flex">
          <h1>Desenvolvimento WordPress</h1>
          <h2>Desenvolva seu negócio, desenvolvendo com WordPress. </h2>
        </div>
        <div className="home__section">
          {blogs.map((blog, index) => (
            <div
              className="home__container"
              key={index}
              onClick={() => handleRedirect(blog.slug)}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
          <div className="home__container__pages flex">
            <p>
              page {page}/{totalPages}
            </p>
            <button
              onClick={() => handelClick()}
              disabled={page === totalPages}
            >
              Carregar mais...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
