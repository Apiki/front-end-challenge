/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import defaultImg from '../images/default.png';
import '../style/News.css';

export default function News() {
  const [news, setNews] = useState('');
  const url = 'wordpress-escolha-site-pequenas-empresas';

  useEffect(() => {
    api
      .get(`/posts?_embed&slug=${url}`)
      .then((response) => setNews(response.data[0]))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  }, [url]);

  console.log(news)

  const createNews = () => {
    if (news) {
      const content = news.content.rendered
      document.getElementById('news').innerHTML = content;
    }
    return 'Carregando...'
  }

  const renderNews = () => {
    return (
      <div className='news-content'>
        <h1>{news.title.rendered}</h1>
        <img
        id='news-img'
        src={
          news['_embedded']['wp:featuredmedia']
          ? news['_embedded']['wp:featuredmedia'][0]['source_url']
          : defaultImg
        }
        alt={
          news['_embedded']['wp:featuredmedia']
          ? news['_embedded']['wp:featuredmedia'][0]['slug']
          : ''
        } />
      </div>
    )
  }

  useEffect(() => {
    createNews()
  }, [news]);


  return (
    <div id='news-body'>
      <div className='news-content'>{news ? renderNews() : ''}</div>
      <div id="news" className='news-content'></div>
    </div>
  )
}
