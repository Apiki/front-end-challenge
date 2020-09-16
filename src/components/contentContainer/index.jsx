import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchApiData } from '../../services/fetch';
import style from './style.module.css';
import Post from '../Post';

export default function ContentContainer() {
  const [contents, setContents] = useState([]);
  const [page, setPage] = useState(1);
  const [haveNext, setNext] = useState(false);

  function fetchPage(pageToFetch) {
    fetchApiData(pageToFetch).then((data) => {
      setContents(data.data);
      setNext(data.next);
    });
  }

  function loadMore() {
    const nextPage = page + 1;
    fetchApiData(nextPage).then((data) => {
      setContents([...contents, ...data.data]);
      setNext(data.next);
    });
    setPage(nextPage);
  }

  useEffect(() => {
    fetchPage(1);
  }, []);

  return contents.length ? (
    <div className={style.container}>
      {contents.map((content) => (
        <Post content={content} />
      ))}
      {haveNext && (
        <button onClick={loadMore} type="button">
          Carregar Mais
        </button>
      )}
    </div>
  ) : (
    <CircularProgress size="3em" className="loading" />
  );
}
