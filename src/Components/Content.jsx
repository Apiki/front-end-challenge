import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Parser from 'html-react-parser';
import { Context } from '../Provider/Context';
import '../Styles/styles.css';
import Loading from './Loading';
import axiosData from '../services/requestAPI';

function Content() {
  const {
    loading,
    dataIntern,
    setLoading,
    setDataIntern,
  } = useContext(Context);
  const history = useHistory();
  const { location: { pathname } } = history;
  const slug = pathname.split('/')[2];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setLoading(true);
    const { data } = await axiosData(`slug=${slug}`);
    setDataIntern(data);
    setLoading(false);
  }, []);

  console.log(loading);

  // eslint-disable-next-line no-underscore-dangle
  if (loading) return <Loading />;

  // eslint-disable-next-line no-underscore-dangle
  const { source_url: url } = dataIntern[0]._embedded['wp:featuredmedia'][0];
  return (
    <div className="contentContainer">
      <img src={ url } alt={ dataIntern.slug } />
      <h1>{dataIntern[0].title.rendered}</h1>
      <div>{Parser(dataIntern[0].content.rendered)}</div>
    </div>
  );
}

export default Content;
