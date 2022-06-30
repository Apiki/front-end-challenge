import React, { useContext, useEffect, useState } from 'react';
import { fetchPostApi, apiHeader } from '../services/requestApi';
import AppContext from '../context/AppContext';
import Loading from '../Components/Loading';
import PostCard from '../Components/PostCard';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';

const HALF_SECOND = 500;
let numberPage = 1;
 
function Home() {
  const {
    cardPost,
    setCardPosts
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const getCardPost = async () => {
      const response = await fetchPostApi(1);
      setCardPosts(response);
    }
    const getTotalPages = async () => {
      const response = await apiHeader();
      setTotalPages(response);
    }
    getCardPost();
    getTotalPages();
    setTimeout(() => {
      setIsLoading(false);
    }, HALF_SECOND)
  }, []);

  const onClickBtn = async () => {
    numberPage += 1
    console.log(totalPages);
    const newCards = await fetchPostApi(numberPage);
    setCardPosts([...cardPost, ...newCards]);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Header/>
      <h1
        className='h1-home'
      >Página Inicial</h1>
      <div
        className='content-home'
      >
        <div>
          {cardPost?.map((post, index) => {
            return (
              <PostCard 
                post={ post }
                key={ index }
              />
            );
          })}
        </div>
      </div>
      {
        numberPage < totalPages && 
        <div className='div-btn'>
          <hr/>
          <button
            className='btn-home'
            type='button'
            onClick={ onClickBtn }
          >
          CARREGAR MAIS...
          </button>
          <hr/>
        </div>
      }
     <Footer/>
    </div>
  );
}

export default Home;