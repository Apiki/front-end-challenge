import { useState, useEffect } from "react";

import { getPost } from "../../services/api";
import Scrolltop from "../../components/Scrolltop";

import postDefault from "../../assets/post-default.png";
import loading from "../../assets/loading.gif"
import './style.scss';

function PostDetails({ match: { params: { slug } } }) {
  const [post, setPost] = useState(false);
  
  useEffect(() => {
    getPost(slug).then(post => {
      setPost(post);
    });
  }, [slug]);

  useEffect(() => {
    const nodeContent = document.getElementsByClassName('post-details__content')[0];
    
    if (post) {
      const formatedContent = post.content.rendered.replace(/<\/p>\n+<p>/g, ' ');
      nodeContent.innerHTML = formatedContent;      
    } 
  }, [post]);

  if (!post) return (<img className="loading" src={ loading } alt="Carregando" />);

  return (
    <div className="postdetails">
      <h1 className="post-details__title">
        {post.title.rendered}
      </h1>
      
      <img 
        className="post-details__img"
        src={ post._embedded["wp:featuredmedia"] 
              ? post._embedded["wp:featuredmedia"][0].source_url
              : postDefault }
        alt=""
      />
      <section className="post-details__content" />
      <Scrolltop />
    </div>
  )
};

export default PostDetails;