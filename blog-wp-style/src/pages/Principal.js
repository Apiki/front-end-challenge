import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { getArticlesList  } from '../services/APIService';
import { receiveAPISuccess } from '../actions/index';

let resultado;

const PaginaInicial = (props) => {
  // const mockFetch = [{
  //   _embedded: {
  //     'wp:featuredmedia': [
  //       {
  //         source_url: 'https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph.png',
  //       },
  //     ],
  //   },
  //   title: {
  //     rendered: 'Como habilitar os recursos ocultos do Gutenberg no seu tema WordPress',
  //   },
  //   slug: 'como-habilitar-os-recursos-ocultos-do-gutenberg-no-seu-tema-wordpress',
  // }];

  const [fetchUrl, setFetchUrl] = useState('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
  const [dataReceived, setDataReceived] = useState(false);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(0);

  const obtido = async (url) => await getArticlesList(url).then((data) => {
    setDataReceived(true);
    resultado = data;
  });
  
  useEffect(() => {
    obtido(fetchUrl);
  },[]);

  useEffect(() => {
    setData(resultado);
  },[dataReceived]);

  useEffect(() => {
    setDataReceived(false);
    obtido(fetchUrl);
  },[fetchUrl]);

  useEffect(() => {
    if (actualPage && actualPage !== 0) {
      setFetchUrl(() => `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${actualPage}`);
    }
  }, [actualPage]);
  
  // Atualiza a store
  if (data) {
    props.APIData(resultado);
  }
  
  if (data && dataReceived) {
    let enableNextBtn = false, enablePrevBtn = false;
    if (actualPage < resultado.totalPages) enableNextBtn = true;
    if (actualPage > 1) enablePrevBtn = true;
    return (
      <div>
        <CardList content={resultado.content}/>
        {enablePrevBtn &&
          <button
            onClick = {
              () => setActualPage(() => actualPage - 1)
            }>Anterior
          </button>}
        {enableNextBtn &&
          <button
            onClick = {
              () => {
                if (actualPage === 0) {
                  return setActualPage(() => actualPage + 2);
                }
                setActualPage(() => actualPage + 1);
              }
            }>Próxima
          </button>}
      </div>
    );
  }
  return (<div>Loading</div>);
};

const mapDispatchToProps = dispatch => (
  {
    APIData: (data) => dispatch(receiveAPISuccess(data))
  }
);

export default connect(null, mapDispatchToProps)(PaginaInicial);
