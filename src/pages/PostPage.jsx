import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { defaultData, getPost } from '../services/getData';
import './PostPage.css';
import DataContext from '../context/DataContext';

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(defaultData);
  const { setIsInLandingPage } = useContext(DataContext);

  useEffect(() => {
    getPost(slug).then((data) => setPost(data));
    setIsInLandingPage(false);
  }, [slug]);

  const {
    content, title, author, image,
  } = post;

  return (
    <div className="post-page-container">
      <h1 className="post-page-title">{title}</h1>
      <h5>
        Autor:
        {' '}
        {author}
      </h5>
      <img src={image} alt={title} />
      <div className="content" dangerouslySetInnerHTML={content} />
    </div>
  );
};

export default PostPage;
