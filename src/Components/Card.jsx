import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../Provider/Context';
import '../Styles/styles.css';
import Loading from './Loading';
import axiosData from '../services/requestAPI';

function Card() {
  const history = useHistory();

  // const DELAY = 1000;
  const {
    arr,
    loading,
    setLoading,
    setArr,
    setNumberPages,
    setNumberPosts,
    count,
    setCount,
    numberPages,
  } = useContext(Context);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { data, numPages, numPosts } = await axiosData('categories=518');
    setArr(data);
    setNumberPages(numPages);
    setNumberPosts(numPosts);
    setLoading(false);
  }, []);

  const showMorePosts = () => {
    if (count <= numberPages) {
      const axiosNewPage = async () => {
        const { data } = await axiosData(`categories=518&page=${count + 1}`);
        setArr(data);
      };
      axiosNewPage();
      setCount(count + 1);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      {arr.map((post) => {
        // eslint-disable-next-line no-underscore-dangle
        const { source_url: url } = post._embedded['wp:featuredmedia'][0];

        return (
          <div className="cardContainer" key={ post.id }>
            <div className="imgContainer">
              <img src={ url } alt={ post.slug } />
            </div>
            <div className="titleContainer">
              <h3>{post.title.rendered}</h3>
              <button
                type="button"
                // eslint-disable-next-line sonarjs/no-use-of-empty-return-value
                onClick={ () => {
                  history.push(`/intern/${post.slug}`);
                  setLoading(true);
                } }
              >
                Ver mais...
              </button>
            </div>
          </div>
        );
      })}

      <div className="buttonContainer">
        <button
          type="button"
          onClick={ showMorePosts }
        >
          Carregar Mais
        </button>
      </div>

    </div>
  );
}

export default Card;
