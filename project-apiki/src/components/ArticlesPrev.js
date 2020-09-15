import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  blogApikiFirstApi,
  blogApikiFirstApiNumberPages,
  blogApikiLoadMoreapi
} from '../services/blogApikiApi';
import Loading from './Loading';
import AsideDestaks from './AsideDestaks';
import '../layout/css/sharedStyle.css';
import '../layout/css/articlesPrev.css';
import '../layout/css/asideDestaks.css';


const ArticleItem = (articlePrev) => {
  let routeFeaturedMedia = articlePrev._embedded['wp:featuredmedia'];
  return (
    <article className="articles-prev-item">
      <Link to={`/${articlePrev.slug}`}>
        <img
          className="articles-prev-item-img"
          src={routeFeaturedMedia ? routeFeaturedMedia[0].source_url : ''}
          alt={routeFeaturedMedia ? routeFeaturedMedia[0].alt_text : ''}
        />
      </Link>
      <div className="articles-prev-item-text">
        <h1 className="articles-prev-item-title font-ibm-plex">
          <Link
            dangerouslySetInnerHTML={{ __html: articlePrev.title.rendered }}
            to={`/${articlePrev.slug}`}></Link>
        </h1>
        <p className="articles-prev-item-author font-ibm-plex">
          <span >by</span> {articlePrev._embedded.author[0].name}
        </p>
        <p dangerouslySetInnerHTML={{ __html: articlePrev.excerpt.rendered }} className="articles-prev-item-subtitle font-ibm-plex">
        </p>
      </div>
    </article>
  );
}

const asideDestaks = (articles) => {
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

const loadMoreBtn = (numberPages, pagesRendered, setPagesRendered, data, setData) => {
  return (
    <div className="load-more-btn">
      <button
        className="btn-default"
        onClick={() => {
          if (pagesRendered < numberPages) {
            blogApikiLoadMoreapi(pagesRendered + 1)
              .then((res) => {
                setData([...data, ...res]);
                setPagesRendered(pagesRendered + 1);
              })
          }
        }}
      >
        Carregar mais
    </button>
    </div>
  );
}

const ArticlesPrev = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [numberPages, setNumberPages] = useState(0);
  const [pagesRendered, setPagesRendered] = useState(1);

  useEffect(() => {
    blogApikiFirstApiNumberPages()
      .then((number) => setNumberPages(parseInt(number, 10)));
    blogApikiFirstApi()
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
        setIsLoading(false);
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
          {pagesRendered < numberPages && loadMoreBtn(
            numberPages,
            pagesRendered,
            setPagesRendered,
            data,
            setData,
          )}
        </div>
        {AsideDestaks(data)}
      </div>
    </div>
  );
}

export default ArticlesPrev;
