import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ConvertDate } from '../helpers/date';
import CustomButton from "../components/customButton";
import '../App.css';

function Home() {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loadingPage, setLoadingPage] = useState(true);

  const [loadingList, setLoadingList] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList(page);
  }, []);

  useEffect(() => {
    if(loadingList) {
      let nextPage = page + 1;
      loadList(nextPage);
    }
  }, [loadingList]);

  const loadList = async (page) => {
    const response = await fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=" + page);
    let data = await response.json();
    
    if(setTotalPages == 0)
      setTotalPages(response.headers.get("X-WP-TotalPages"));
    
    setList([...list, ...data]);

    if(loadingPage)
      setLoadingPage(false);

    if(loadingList)
      setLoadingList(false);

    setPage(page);
  }   

  return (
    <div className="App">
        {loadingPage ? (
          <div className="loader" id="loader">
            <div className="loader__spin">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        ) : (
          <div>
            <div className="cards">
              {list.map((item, index) => {
                const img_url = item._embedded["wp:featuredmedia"][0]["source_url"];

                return (
                  <div className="card" key={index}>
                    <div className="card__image">
                      <img src={img_url} />
                    </div>
                    <div className="card__body">
                      <div className="card__title">
                        {item.title.rendered}
                      </div>
                      <div className="card__text">
                        <p className="card__author">Autor: {item._embedded.author[0].name}</p>  
                        <p className="card__date">Data: {ConvertDate(item.date_gmt)}</p>                      
                      </div>
                      <div className="card__link">
                        <Link to={{ 
                          pathname: "/post/" + item.slug, 
                          state: { post_url: item.link }
                          }} 
                          slug={item.slug} 
                          className="button__link">
                            Ler mais
                          </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="list__load"> 

                {page >= 3 ? (
                  <p className="not__found">Não há mais postagens para exibir...</p>
                ) : (
                  <div>
                    {!!loadingList && (
                      <p className="not__found">Carregando...</p>
                    )}
                    
                    {!loadingList && (
                      <CustomButton onClick={() => setLoadingList(true)}>
                        Carregar mais...
                      </CustomButton>
                    )}  
                  </div>
                )}
              
                 
            </div>
          </div>
        )}
    </div>
  );
}

export default Home;
