/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import moment from 'moment';
import useFetchData from '../../hooks/useFetchData';
import { fetchBlogPost } from '../../services/apikiAPI';

export default function Post() {
  const { slug } = useParams();
  const { data, isFetching, error } = useFetchData(fetchBlogPost, slug);

  return (
    <main>
      {isFetching && <h1>Loading</h1>}
      {!isFetching && error && <div>{error}</div>}
      {!isFetching && data && (
        <section>
          <div>
            <div>
              Categoria:
              <a
                href={data[0]._embedded['wp:term'][0][0].link}
                rel="external noreferrer noopener"
                target="_blank"
              >
                {`${data[0]._embedded['wp:term'][0][0].name}`}
              </a>
              <span>
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
              </span>
            </div>
            <a
              href={data[0].link}
              rel="external noreferrer noopener"
              target="_blank"
            >
              <h1>{data[0].title.rendered}</h1>
            </a>
            {parse(data[0].excerpt.rendered)}
          </div>
          <div>
            <img
              src={data[0]._embedded.author[0].avatar_urls[24]}
              alt={data[0]._embedded.author[0].name}
            />
            <span>
              by
              <a
                href={data[0]._embedded.author[0].link}
                rel="external noreferrer noopener"
                target="_blank"
              >{`${data[0]._embedded.author[0].name}`}</a>
            </span>
            <span>{moment(data[0].date, 'YYYYMMDD').fromNow()}</span>
          </div>
          <div>{parse(data[0].content.rendered)}</div>
          <div>
            <img
              src={data[0]._embedded.author[0].avatar_urls[96]}
              alt={data[0]._embedded.author[0].name}
            />
            <a
              href={data[0]._embedded.author[0].link}
              rel="external noreferrer noopener"
              target="_blank"
            >{`${data[0]._embedded.author[0].name}`}</a>
            <p>{data[0]._embedded.author[0].description}</p>
          </div>
        </section>
      )}
    </main>
  );
}
