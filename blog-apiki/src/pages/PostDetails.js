import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import context from '../context/Context';
import { fetchSinglePost } from '../services';
import '../styles/postDetails.css';

function PostDetails() {

  const { setSinglePost, singlePost } = useContext(context);
  const [isFetching, setFetching] = useState(true);
  const location = useLocation().pathname;
  let newPost = [];
  const slug = location.replace("/", "");

  const getSinglePost = async () => {
    newPost = await fetchSinglePost(slug);
    setSinglePost(newPost);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    html.scrollTop = '0px';
    setFetching(true);
    getSinglePost();
    setFetching(false);
  }, []);

  return (
    <div className="post-container">
      { isFetching ? <h1>Carregando...</h1> : singlePost.map((post, index) => (
          <div key={ index }>
            <h1 className="font-weight-bold">{ post.title.rendered }</h1>
            <img
              className="img-fluid img-thumbnail"
              src={ post._embedded["wp:featuredmedia"][0].source_url }
              alt={ post.slug }
              width="800"
            />
            <div className="content-container" dangerouslySetInnerHTML={{__html: post.content.rendered }} />
            <div className="author">
              <div className="author-name-img">
                <a href={ post._embedded.author[0].link }>
                  <h4 className="author-name">{ post._embedded.author[0].name }</h4>
                </a>
                <img
                  className="author-img"
                  src={ post._embedded.author[0].avatar_urls[96] }
                  alt={ post._embedded.author[0].name }
                />
              </div>
              <h5 className="font-monospace">{ post._embedded.author[0].description }</h5>
            </div>
          </div>
      ))}
      <div>
        <a
          href="/"
          onClick={() => setSinglePost([])}
        >
          Voltar à Página Inicial
        </a>
      </div>
    </div>
  );
}

export default PostDetails;
