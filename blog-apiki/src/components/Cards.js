import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import context from '../context/Context';
import { fetchAPI, fetchMorePosts, getMaxPages } from '../services';
import '../styles/cards.css';

function Cards() {
  const {
    setPosts,
    posts,
    pageNumber,
    setPageNumber,
    maxPages,
    setMaxPages,
  } = useContext(context);
  const [isFetching, setFetching] = useState(true);
  const html = document.querySelector('html');
  let allPosts = [];

  const getResponse = async () => {
    allPosts = await fetchAPI();
    const pages = await getMaxPages();
    setPosts(allPosts);
    setMaxPages(parseInt(pages));
  };

  useEffect(() => {
    html.scrollTop = '0px;'
    setFetching(true);
    getResponse();
    setFetching(false);
  }, []);

  const loadMore = async () => {
    let page = pageNumber;
    page > maxPages ? page = 1 : page += 1;
    const morePosts = await fetchMorePosts(page);
    console.log(page);
    setFetching(true);
    setPosts(morePosts);
    setPageNumber(page);
    setFetching(false);
    html.scrollTop = '0px;'
  };

  return (
    <div className="container">
      <div className="card-container">
        { isFetching ? <h1>Carregando Posts</h1> : posts.map((post, index) => (
          <Link to={`/${ post.slug }`} key={ index }>
            <div className="card text-white bg-info mb-3" key={ index }>
              <img
                className="card-img-top"
                src={ post._embedded["wp:featuredmedia"][0].source_url }
                alt={ post.slug }
                width="400"
              />
              <div className="card-body">
                <h2 className="card-title">{ post.title.rendered }</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="button-container">
        <button type="button" className="btn btn-success text-center font-weight-bold" onClick={ () => loadMore() }>Carregar mais...</button>
      </div>
    </div>
  );
}

export default Cards;
