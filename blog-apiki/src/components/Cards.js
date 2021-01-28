import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import context from '../context/Context';
import { fetchAPI, fetchMorePosts } from '../services';

function Cards() {
  const { setPosts, posts, setFetching, isFetching } = useContext(context);
  let lastPosts = [];

  const getResponse = async () => {
    lastPosts = await fetchAPI();
    setPosts(lastPosts);
  };

  useEffect(() => {
    setFetching(true);
    getResponse();
    console.log(posts);
    setFetching(false);
    fetchMorePosts();
  }, []);

  // const loadMore = ({ target }) => {
  //   if (target.innerHTML === selectedCategory) {
  //     resetFilter();
  //   }
  //   setSelectedCategory(target.innerHTML);
  //   filterByCategory(target.innerHTML);
  //   console.log('CATEGORIA:', selectedCategory);
  // };

  return (
    <div className="container-card">
      { isFetching ? <h2>Carregando Cards</h2> : posts.map((post, index) => (
        <Link to={`/${ post.slug }`}>
          <div key={ index }>
            <h2>{ post.title.rendered }</h2>
            <img src={ post._embedded["wp:featuredmedia"][0].source_url } alt={ post.slug } width="400" />
          </div>
        </Link>
      ))}
      <div>
        {/* <button type="button" onClick={ () => loadMore() }>Carregar mais...</button> */}
      </div>
    </div>
  );
}

export default Cards;
