import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loading from '../components/Loading';
import { getSinglePost } from '../services/apikiAPI'


function PostPage() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  let { slug } = useParams();
  useEffect(() => {
    getSinglePost(slug).then(post => {
      setPost(post[0]);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading/>
  return (
    <div className="container">
      <img src={post._embedded['wp:featuredmedia'][0].source_url} className="img-fluid" alt="Imagem destacada do post"></img>
      <h2 className="title text-center">{post.title.rendered}</h2>
      <div className="post" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
  );
}

export default PostPage;
