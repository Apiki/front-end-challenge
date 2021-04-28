import React, { useContext, useEffect } from 'react';
import BlogContext from '../Context/BlogContext';
import loading from '../Images/giphy.webp';
import logo from '../Images/logo-apiki-blog-wordpress.webp';
import '../Css/Post.css';

function Post() {
  const {
    mediaPost,
  } = useContext(BlogContext);

  useEffect(() => {}, [mediaPost]);

  return (
    <div className="post-page">
      <img src={ logo } alt="logo-apiki"/>
      { !mediaPost ? <img src={ loading } alt="loading"/> : <h1>{ mediaPost['title']['rendered'] }</h1> }
      { mediaPost && <div dangerouslySetInnerHTML={{__html: mediaPost['content']['rendered']}} /> }
    </div>
  );
}

export default Post;
