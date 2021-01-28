import React, { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import context from '../context/Context';
import { fetchSinglePost } from '../services';

function PostDetails() {

  const { setSinglePost, singlePost, setFetching, isFetching } = useContext(context);
  const location = useLocation().pathname;
  let newPost = [];
  const slug = location.replace("/", "");

  const getSinglePost = async () => {
    newPost = await fetchSinglePost(slug);
    setSinglePost(newPost);
  };

  useEffect(() => {
    setFetching(true);
    getSinglePost();
    setFetching(false);
  }, []);

  return (
    <div>
      { isFetching ? <h2>Carregando...</h2> : singlePost.map((post, index) => (
          <div key={ index }>
            <h1>{ post.title.rendered }</h1>
            <img src={ post._embedded["wp:featuredmedia"][0].source_url } alt={ post.slug } width="800" />
            <div dangerouslySetInnerHTML={{__html: post.content.rendered }}></div>
          </div>
      ))}
      <div>
      <Link to="/">Voltar à Página Inicial</Link>
      </div>
    </div>
  );
}

export default PostDetails;
