import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import ArticleShow from '../components/ArticleShow';
import { getArticle } from '../services/APIService';
import { receiveAPIArticleSuccess } from '../actions/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import loadingImage from '../images/InternetSlowdown_Day.gif';
import './Principal.css';

let resultado;

const ArticleDetail = (props) => {
  const location = useLocation();
  const [fetchUrl, setFetchUrl] = useState('');
  const [dataReceived, setDataReceived] = useState(false);
  const [data, setData] = useState();
  const fetchComplement = location.pathname.substring(1, (location.pathname.length));

  const obtido = async (url) => await getArticle(url).then((data) => {
    setDataReceived(true);
    resultado = data;
  });
  
  useEffect(() => {
    // obtido(fetchUrl);
    setFetchUrl(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${fetchComplement}`)
  },[]);

  useEffect(() => {
    setDataReceived(false);
    obtido(fetchUrl);
  },[fetchUrl]);

  useEffect(() => {
    setData(resultado);
  },[dataReceived]);

  useEffect(() => {
    // Atualiza a store
    if (data) {
      props.APIData(resultado);
    }
  }, [data]);

  // Se não retornou resultado vai para NotFoun
  if (data && dataReceived) {
    if (!data.length) {
      return (<Redirect to="/notfound" />);
    }
  }

  // Exibição principal
  if (data && dataReceived) {
    return(
      <div className="userScreen">
        <div className="padStepThree"><Header styles={'header bcgOrange'}/></div>
        <div className="content padStepThree"><ArticleShow /></div>
        <div className="content padStepTwo"><a href="/">Voltar</a></div>
        <div><Footer styles={'footer bcgOrange'}/></div>
      </div>
    );
  }
  return (<div><img src={loadingImage} alt="loading"/></div>);
};

const mapDispatchToProps = dispatch => (
  {
    APIData: (data) => dispatch(receiveAPIArticleSuccess(data))
  }
);

export default connect(null, mapDispatchToProps)(ArticleDetail);
