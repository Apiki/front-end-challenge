import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchData, fetchTotalPage } from '../service/requestsApi';
import CardPost from './CardPost';
import Carousel from 'react-elastic-carousel';
import { contextBlog } from '../service/context';
import parse from 'html-react-parser';
import '../style/HomeScreen.css';


const HomeScreen = () => {
  const { slugReq, setSlugReq, dataApi, setDataApi } = useContext(contextBlog)
  const [totalPage, setTotalPage] = useState('');
  const [pageAtual, setPageAtual] = useState(2)
  const [nextPage, setNextPage] = useState([]);

  useEffect(() => {
    if (dataApi.length === 0) {
      fetchData().then(({ data }) => setDataApi(data))
        .catch(err => err);
    } else {
      fetchTotalPage(pageAtual).then((data) => {
        setNextPage(data.data)
        setTotalPage(data.headers['x-wp-totalpages'])
      });
    }
  }, [dataApi, setDataApi, pageAtual]);

  const dataForCarousel = dataApi.slice(0, 3).map(({ id, title, _embedded, slug }) => {
    const img = _embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
    return { id, title, img, slug }
  });

  const articleCarousel = () => (
    <div className="articleCarousel">
      <Carousel >
        {dataForCarousel.map(({ id, title, img, slug }) => (
          <>
            <CardPost
              key={id}
              title={title.rendered}
              photo={img}
              onClick={() => setSlugReq(slug)}
            />
          </>
        ))}
      </Carousel>
      {moreArticle()}
    </div>
  );

  const moreArticle = () => (
    <div className="card-positionArticle">
      <h1 className="card-title">Confira as Novidades da Semana</h1>
      {dataApi.slice(3, 11).map(({ id, title, _embedded, slug, excerpt }) => {
        const img = _embedded['wp:featuredmedia'][0]?.media_details.sizes.medium.source_url;
        const resumeArticle = parse(excerpt.rendered);
        return (
          <div className="card-info">
            <CardPost
              key={id}
              photo={img}
              title={title.rendered}
            />
            <h2>{resumeArticle}</h2>
            <button
              className="btn-detailPost"
              onClick={() => setSlugReq(slug)}>ver mais</button>
          </div>
        )
      })}
      <button
        onClick={() => {
          setPageAtual(pageAtual < totalPage ? pageAtual + 1 : totalPage)
          return setDataApi(nextPage)
        }
        }
        className="card-button"
        type="button">Carregar Mais</button>
    </div>
  );

  if (dataApi.length === 0) return <div>Loading...</div>

  return (
    <div>
      {articleCarousel()}
      {slugReq && <Redirect to={`/internal/${slugReq}`} />}
    </div>
  );
}

export default HomeScreen;
