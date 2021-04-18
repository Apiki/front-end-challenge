import React, { useContext } from 'react';
import { DateContext } from '../Provider/DataContext';
import '../Styles/styles.css';

function Content() {
  const {
    dataIntern,
  } = useContext(DateContext);
  // eslint-disable-next-line no-underscore-dangle
  const { source_url: url } = dataIntern[0]._embedded['wp:featuredmedia'][0];

  return (
    <div>
      <h3>{dataIntern[0].title.rendered}</h3>
      <img src={ url } alt={ dataIntern.slug } />
      <pre>{dataIntern[0].content.rendered}</pre>
    </div>
  );
}

export default Content;
