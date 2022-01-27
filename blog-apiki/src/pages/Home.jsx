import { useEffect, useState } from 'react';
import '../style/Home.css'
import api from '../services/api';
import Card from '../components/Card';
import Header from '../components/Header';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import defaultImg from '../images/default.png';

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
    <div>
      <Header />
      <div className='home-news'>
        {
          news?
          news.map(curr => (
            <Card
              data-testid='card'
              className='card'
              key={curr.id}
              img={
                curr['_embedded']['wp:featuredmedia']
                ? curr['_embedded']['wp:featuredmedia'][0]['source_url']
                : defaultImg
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
        <button data-testid='topo-btn' id='topo-btn' onClick={() => VoltarAoTopo()}>
          <BsFillArrowUpCircleFill/>
        </button>
    </div>
  );
}
