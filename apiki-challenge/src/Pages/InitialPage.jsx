import React, { useContext, useEffect } from 'react';
import logo from '../Images/logo-apiki-blog-wordpress.webp';
import loading from '../Images/giphy.webp';
import LoadMore from '../Components/LoadMore';
import Card from '../Components/Card';
import BlogContext from '../Context/BlogContext';
import '../Css/InitialPage.css';


function InitialPage() {
  const {
    posts,
    setMediaPost,
  } = useContext(BlogContext);

  useEffect(() => {
    setMediaPost('');
  }, [setMediaPost]);

  useEffect(() => {}, [posts]);

  return (
    <div className="initial-page">
      <img src={ logo } alt="logo-apiki"/>
      <h1>O que você quer saber sobre WordPress?</h1>
      <div>
        { !posts ? <img src={ loading } alt="loading"/> : posts
          .map((post, index) => <Card post={ post } key={ index }/>) }
      </div>
      <LoadMore />
    </div>
  );
}

export default InitialPage;
