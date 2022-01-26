import React, { useEffect, useState } from 'react';
import '../style/Home.css'
import api from '../services/api';
import Card from '../components/Card';
import Header from '../components/Header';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Home() {
  const [news, setNews] = useState([]);
  const [response, setResponse] = useState(0);
  const [page, setPage] = useState(2);

  useEffect(() => {
    api
      .get("/posts?_embed&categories=518")
      .then((response) => setNews(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  }, []);

  useEffect(() => {
    console.log('loop?')
    if (news.length >= response['x-wp-total']) {
      document.getElementById('carregar-mais-btn').disabled = true
  }
  }, [news, response]);

  const CarregarMais = async () => {
    const newsList = news;

      await api
        .get(`/posts?_embed&categories=518&page=${page}`)
        .then((response) =>
            setNews(newsList.concat(response.data),
            setResponse(response.headers)
          ))
        .catch((err) => {
          console.error("Ocorreu um erro:" + err);
        });

      setPage(page + 1)

    }

  const VoltarAoTopo = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Header />
      <div className='home-news'>
        {
          news?
          news.map(curr => (
            <Card
              key={curr.id}
              img={
                curr['_embedded']['wp:featuredmedia']
                ? curr['_embedded']['wp:featuredmedia'][0]['source_url']
                : ''
            }
              slug={curr.slug}
              title={curr.title.rendered}
              link={curr.link}
            />
          ))
          : 'Carregando...'
        }
        <button id='carregar-mais-btn' onClick={() => CarregarMais()}>Carregar mais...</button>
      </div>
        <button id='topo-btn' onClick={() => VoltarAoTopo()}>
          <BsFillArrowUpCircleFill/>
        </button>
    </>
  );
}
