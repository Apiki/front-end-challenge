import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { blogApikiContext } from '../hooks/blogApikiContext';
import { blogApikiFirstApi, testHeader } from '../services/blogApikiApi';
import Loading from './Loading';
import '../layout/css/sharedStyle.css';
import '../layout/css/articlesPrev.css';


const ArticleItem = (articlePrev) => {
  return (
    <article className="articles-prev-item">
      <Link to={`/${articlePrev.slug}`}>
        <img
          className="articles-prev-item-img"
          src={articlePrev._embedded['wp:featuredmedia'][0].source_url}
          alt={articlePrev._embedded['wp:featuredmedia'][0].alt_text}
        />
      </Link>
      <div className="articles-prev-item-text">
        <h1 className="articles-prev-item-title font-ibm-plex">
          <Link to={`/${articlePrev.slug}`}>{articlePrev.title.rendered}</Link>
        </h1>
        <p className="articles-prev-item-author font-ibm-plex">
          <span >by</span> {articlePrev._embedded.author[0].name}
        </p>
        <p className="articles-prev-item-subtitle font-ibm-plex">
          {articlePrev.excerpt.rendered.substring(3, articlePrev.excerpt.rendered.length - 5)}
        </p>
      </div>
    </article>
  );
}

const asideDestaks = (articles, marginTopdestaksPosition) => {
  return (
    <aside className="articles-prev-destaks">
      <h1 className="articles-prev-destaks-title">Destaques da semana</h1>
      <hr />
      <ul>
        {articles.map((article) =>
          <li key={article.id}>
            <Link
              to={`/${article.slug}`}
              className="font-ibm-plex"
            >
              {article.title.rendered}
            </Link>
          </li>
        )}
      </ul>
    </aside>
  );
}

const loadMoreBtn = () => {
  return (
    <div className="load-more-btn">
      <button
        className="btn-default"
      >
        Carregar mais
    </button>
    </div>
  );
}

const ArticlesPrev = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    article,
    setArticle
  } = useContext(blogApikiContext);

  useEffect(() => {
    testHeader().then((res) => console.log('aqui', res))
    blogApikiFirstApi()
      .then((res) => {
        setData(res)
        console.log(res)
        setIsLoading(false)
      });
  }, []);

  if (isLoading) return <Loading />

  return (
    <div className="articles-prev-main-container">
      <div className="articles-prev-main-title-container">
        <h1 className="articles-prev-main-title font-ibm-plex">
          Desenvolvimento WordPress
        </h1>
        <h2 className="articles-prev-main-subtitle font-ibm-plex">
          Desenvolva seu negócio, desenvolvendo com WordPress.
        </h2>
      </div>
      <div className="articles-prev-contents-container">
        <div className="articles-prev-contents">
          {data.map((articlePrev) =>
            <div key={articlePrev.id}>
              {ArticleItem(articlePrev)}
            </div>)}
          {loadMoreBtn()}
        </div>
        {asideDestaks(data)}
      </div>
    </div>
  );
}

export default ArticlesPrev;
