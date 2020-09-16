import React, { useState, useEffect } from 'react';
import { fetchPostBySlug } from '../../services/api';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import DefaultGravatar from '../../assets/defaultGravatar.png';
import './stylesheet.css';

const Post = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPostBySlug(slug)
    .then((json) => {
      setPosts(json[0]);
      setIsLoading(false);
    });
  }, [slug]);


  return (
    <main className= "post-page">

      {isLoading && <div className="loader"><ReactLoading type={"spin"} color={"#FF8C00"} height={150} width={150} /></div>}

      {!isLoading && (
        <>
        <div className="post-title-container scale-up-center">
          <h1 dangerouslySetInnerHTML={{ __html: posts.title.rendered }}></h1>
          <p dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></p>
          <div className="post-author-container">
            <img
            src={ posts._embedded.author[0].avatar_urls ? posts._embedded.author[0].avatar_urls[24] : DefaultGravatar }
            alt={ posts._embedded.author[0].name || 'Default Gravatar'}
            />
            <span>Por: { posts._embedded.author[0].name} - { new Date(posts.date).toLocaleDateString() }.</span>
          </div>
        </div>
        <div className="post-content scale-up-center" dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>
        </>
      )}

    </main>
  );
}

export default Post;
