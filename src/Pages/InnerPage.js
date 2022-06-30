import React, {  useEffect, useState } from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';
import { fetchInnerPost } from '../services/requestApi';
import './InnerPage.css';

const HALF_SECOND = 1500;

function InnerPage ({ match }) {
  const { slug } = match.params;

  const [isLoading, setIsLoading] = useState(true);
  const [innerPage, setInnerPage] = useState([]);

  const contentSubTitle = () => {
    const dados = innerPage[0].excerpt.rendered;
    return dados;
  };

  const content = () => {
    const dados = innerPage[0].content.rendered;
    return dados;
  }

  useEffect(() => {
    const getInnerPost = async () => {
      const response = await fetchInnerPost(slug);
      setInnerPage(response);
      console.log(response);
    };
    getInnerPost();
    setTimeout(() => {
      setIsLoading(false);
    }, HALF_SECOND)
  }, [slug]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Header/>
      <div className='inner-page-content' >
        <h1
          className='h1-inner-page'
        >{ innerPage[0].title.rendered }</h1>
        <h2>
          <div 
            className='h2-innerpage'
            dangerouslySetInnerHTML={{__html: contentSubTitle()}} 
          />
        </h2>
        <div 
            className='content-innerpage'
            dangerouslySetInnerHTML={{__html: content()}} 
        />
      </div>
      <Footer/>
    </div>
  );
};

export default InnerPage;

