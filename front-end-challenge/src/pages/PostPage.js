import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSinglePost } from '../services/apikiAPI';
import Loading from '../components/Loading';
import Footer from '../components/Footer';


function PostPage() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  let { slug } = useParams();
  useEffect(() => {
    getSinglePost(slug).then(post => {
      setPost(post[0]);
      setLoading(false);
    });
  });

  if (loading) return <Loading/>
  return (
    <div className="PostPage">
      <div className="container">
        <h2 className="title">{post.title.rendered}</h2>
        <p className="lead">por: {post._embedded.author[0].name}</p>
        <hr/>
        <p>Postado em: {new Date(post.date).toLocaleDateString()}</p>
        <img src={post._embedded['wp:featuredmedia'][0].source_url} className="img-fluid" alt="Imagem destacada do post"></img>
        <div className="post mt-4" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
      <Footer/>
    </div>
  );
}

export default PostPage;
