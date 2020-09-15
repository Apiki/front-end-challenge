import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { getArticlesList  } from '../services/APIService';
import { receiveAPISuccess } from '../actions/index';
import loadingImage from '../images/InternetSlowdown_Day.gif';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Principal.css';

let resultado;
let accumulator = [];

const PaginaInicial = (props) => {
  const [fetchUrl, setFetchUrl] = useState('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
  const [dataReceived, setDataReceived] = useState(false);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(0);
  const [acc, setAcc] = useState();

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

  useEffect(() => {
    // Função de criação do acumulador
    if (data) {
      let comparisson, comparisson1, comparisson2;
      comparisson = accumulator.map((e) => e.id);
      comparisson2 = data.content.map((e) =>  e.id);
      comparisson1 = comparisson.slice((comparisson.length - comparisson2.length), comparisson.length);

      for (let i = 0; i < comparisson2.length; i += 1) {
        if (comparisson1[i] !== comparisson2[i]) { // Se forem arrays diferentes acumulam-se os resultados
          accumulator = [...accumulator, ...data.content];
          setAcc(accumulator);
          break ;
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (acc) {
      // Atualiza a store
      props.APIData(acc);
    }
  }, [acc]);
  
  if (acc) {
    let enableNextBtn = false;
    if (actualPage < resultado.totalPages) enableNextBtn = true;
    return (
      <div className="userScreen">
        <div className="padStepThree"><Header styles={'header bcgBlue'}/></div>
        <div className="listContent">
          <CardList />
        </div>
        <div className="padStepThree">
          {enableNextBtn && dataReceived &&
            <button className="btnBlue"
              onClick = {
                () => {
                  if (actualPage === 0) {
                    return setActualPage(() => actualPage + 2);
                  }
                  setActualPage(() => actualPage + 1);
                }
              }> {`> Carregar mais...`}
            </button>}
        </div>
        <div>
          <Footer styles={'footer bcgBlue'}/>
        </div>
      </div>
    );
  }
  return (<div><img src={loadingImage} alt="loading"/></div>);
};

const mapDispatchToProps = dispatch => (
  {
    APIData: (data) => dispatch(receiveAPISuccess(data))
  }
);

export default connect(null, mapDispatchToProps)(PaginaInicial);
