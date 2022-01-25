import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Card from '../components/Card';
import Header from '../components/Header';

export default function Home() {
  const [news, setNews] = useState();

  useEffect(() => {
    api
      .get("/posts?_embed&categories=518")
      .then((response) => setNews(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  }, []);

  console.log(news)

  return (
    <>
      <Header />
      <div>
        {
          news?
          news.map(curr => (
            <Card
              key={curr.id}
              img={curr['_embedded']['wp:featuredmedia'][0].source_url}
              slug={curr.slug}
              title={curr.title.rendered}
              link={curr.link}
            />
          ))
          : 'Carregando...'
        }
      </div>
    </>
  );
}
