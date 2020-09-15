import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogApikiArticleApi } from '../services/blogApikiApi';
import Loading from './Loading';
import '../layout/css/article.css';

const Article = () => {

  const slug = useLocation().pathname.substring(1);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    blogApikiArticleApi(slug)
      .then((res) => {
        setData(res[0]);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) return <Loading />;

  return (
    <div className="article-main-container">
      <h1 className="article-title font-ibm-plex"
        dangerouslySetInnerHTML={{ __html: data.title.rendered }}
      >
      </h1>
      <h2
        className="article-subtitle font-ibm-plex"
        dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
      >
      </h2>
      <hr />
      <div className="article-author-container">
        <img
          className="article-author-img"
          src={data._embedded.author[0].avatar_urls['24']}
          alt="Avatar autor"
        />
        <p className="article-author-name">
          <span >by</span>
          {data._embedded.author[0].name}</p>
      </div>
      <div
        className="article-content-container font-ibm-plex"
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
      >
      </div>
      <div className="article-about-author-container">
        <img
          className="article-about-author-img"
          src={data._embedded.author[0].avatar_urls['96']}
          alt="Avatar autor"
        />
        <div className="article-about-author font-ibm-plex">
          <h4 className="article-about-author-name">{data._embedded.author[0].name}</h4>
          <p className="article-about-author-text">{data._embedded.author[0].description}</p>
        </div>
      </div>
    </div>

  );
}

export default Article;
