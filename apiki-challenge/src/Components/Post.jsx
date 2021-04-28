import React, { useContext, useEffect } from 'react';
import BlogContext from '../Context/BlogContext';
import loading from '../Images/giphy.webp';

function Post() {
  const {
    mediaPost,
  } = useContext(BlogContext);

  useEffect(() => {}, [mediaPost]);

  return (
    <div>
      { !mediaPost ? <img src={ loading } alt="loading"/> : <h1>{ mediaPost['title']['rendered'] }</h1> }
      { mediaPost && <div dangerouslySetInnerHTML={{__html: mediaPost['content']['rendered']}} /> }

    </div>
  );
}

export default Post;
