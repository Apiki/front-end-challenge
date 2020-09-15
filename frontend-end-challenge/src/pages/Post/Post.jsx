/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import moment from 'moment';
import useFetchData from '../../hooks/useFetchData';
import { Loading } from '../../components';
import { fetchBlogPost } from '../../services/apikiAPI';
import FallbackImageSmall from '../../assets/indisponivel_24.png';
import FallbackImageMedium from '../../assets/indisponivel_96.png';

/* Para parsear as strings contendo html, oriundas da API,Preferi o uso da lib
'html-react-parser' à propriedade 'dangerouslySetInnerHTML', isso 
evita a possiblidade de  cross-site scripting (XSS) attack */
export default function Post() {
  const { slug } = useParams();
  const { data, isFetching, error } = useFetchData(fetchBlogPost, slug);

  return (
    <div className="container is-fluid">
      {isFetching && <Loading />}
      {!isFetching && error && <div>{error}</div>}
      {!isFetching && data && (
        <section className="section">
          <nav className="level">
            <div className="level-item has-text-centered">
              <p className="heading">
                Categoria:
                <a
                  href={data[0]._embedded['wp:term'][0][0].link}
                  rel="external noreferrer noopener"
                  target="_blank"
                >
                  {`${data[0]._embedded['wp:term'][0][0].name}`}
                </a>
              </p>
            </div>
            <div className="level-item has-text-centered">
              <p className="heading">
                tags:
                {data[0]._embedded['wp:term'][1].map((tag) => (
                  <a
                    key={tag.id}
                    href={tag.link}
                    rel="external noreferrer noopener"
                    target="_blank"
                  >
                    {tag.name}
                  </a>
                ))}
              </p>
            </div>
          </nav>
          <a
            href={data[0].link}
            rel="external noreferrer noopener"
            target="_blank"
          >
            <h1 className="title is-1 is-spaced">{data[0].title.rendered}</h1>
          </a>
          <div className="content is-medium">
            {parse(data[0].excerpt.rendered)}
          </div>
          <div className="level">
            <div className="level-item">
              <img
                src={
                  data[0]._embedded.author[0].avatar_urls
                    ? data[0]._embedded.author[0].avatar_urls[24]
                    : FallbackImageSmall
                }
                alt={data[0]._embedded.author[0].name || 'Indisponível'}
              />
              <p className="heading">by</p>
              <a
                href={data[0]._embedded.author[0].link }
                rel="external noreferrer noopener"
                target="_blank"
              >{`${data[0]._embedded.author[0].name || 'Indisponível'}`}</a>
            </div>
            <div className="level-item">
              {moment(data[0].date, 'YYYYMMDD').fromNow()}
            </div>
          </div>
          <div className="container is-fluid">
            {parse(data[0].content.rendered)}
          </div>
          <article className="tile is-child is-6">
            <img
              src={
                data[0]._embedded.author[0].avatar_urls
                  ? data[0]._embedded.author[0].avatar_urls[96]
                  : FallbackImageMedium
              }
              alt={data[0]._embedded.author[0].name}
            />
            <a
              href={data[0]._embedded.author[0].link}
              rel="external noreferrer noopener"
              target="_blank"
            >
              <p className="title is-5 is-spaced">{`${data[0]._embedded.author[0].name || 'Indisponível'}`}</p>
            </a>
            <p className="content">{data[0]._embedded.author[0].description || 'Descrição indisponível'}</p>
          </article>
        </section>
      )}
    </div>
  );
}
