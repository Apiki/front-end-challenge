import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { DateContext } from '../Provider/DataContext';
import '../Styles/styles.css';

function Card() {
  const history = useHistory();

  const DELAY = 6500;
  const {
    arr,
    setDataIntern,
    showMorePosts,
    setRedirect,
  } = useContext(DateContext);

  function renderInternPage(slug) {
    const endpointSlug = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
    const axiosInternPage = async () => {
      const response = await axios.get(endpointSlug);
      const dataInternPage = await response.data;
      setDataIntern(dataInternPage);
      setRedirect(true);
      setTimeout(history.push, DELAY, '/intern');
    };
    axiosInternPage();
  }

  return (
    <div>
      {arr.map((post) => {
        // eslint-disable-next-line no-underscore-dangle
        const { source_url: url } = post._embedded['wp:featuredmedia'][0];

        return (
          <div className="cardContainer" key={ post.id }>
            <h3>{post.title.rendered}</h3>
            <img src={ url } alt={ post.slug } />
            <button
              type="button"
              // eslint-disable-next-line sonarjs/no-use-of-empty-return-value
              onClick={ () => {
                renderInternPage(post.slug);
                // redirectToIntern();
              } }
            >
              Ver mais...
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={ showMorePosts }
      >
        Carregar Mais
      </button>

    </div>
  );
}

export default Card;
