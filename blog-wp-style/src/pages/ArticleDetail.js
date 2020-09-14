import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ArticleShow from '../components/ArticleShow';
import { getArticle } from '../services/APIService';
import { receiveAPIArticleSuccess } from '../actions/index';
import loadingImage from '../images/InternetSlowdown_Day.gif';

let resultado;

const ArticleDetail = (props) => {
  const location = useLocation();
  const mockFetch = [{
    _embedded: {
      'wp:featuredmedia': [
        {
          source_url: 'https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph.png',
        },
      ],
    },
    title: {
      rendered: 'Como habilitar os recursos ocultos do Gutenberg no seu tema WordPress',
    },
    slug: 'como-habilitar-os-recursos-ocultos-do-gutenberg-no-seu-tema-wordpress',
  }];

  // <div>Endereço Artigo {location.pathname}</div>
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

  // Atualiza a store
  if (data) {
    props.APIData(resultado);
  }
  // Exibição principal
  if (data && dataReceived) {
    return(
      <div>
        <ArticleShow content={resultado} />
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
