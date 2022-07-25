import HomeCard from "../../components/HomeCard";
import './style.scss';
import { useState, useEffect } from "react";
import fetchData from "../../hooks/useFetch";

export default function Home() {
  const api = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

  const [page, setPage] = useState(1);
  const [data, loading, fetch, totalPages] = fetchData();
  useEffect(() => {
    fetch(api);
  }, []);

  const onNext = (e) => {
    setPage(page + 1);
  }
  const onPrev = (e) => {
    window.scrollTo(0, 0);
    setPage(page - 1);
  }

  useEffect(() => {
    fetch(api+`&page=${page}`);
  }, [page]);

  return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <h1>Especialista em WordPress
          <span>Só fazemos uma coisa em WordPress: Tudo!</span></h1>
        </div>
      </div>
      <div className="container">
        <div className="card-list">
          <div className="row">
            {loading ? ( <div></div> ) : (
                data?.map(post => (
                  <div className="col-lg-6 col-12" key={post.id}>
                    <HomeCard data={post}/>
                  </div>
              )
              ))}
          </div>
        </div>
        <div className="row">
          {page == 1  && (<button onClick={onNext}>Carregar mais...</button>)} 
          {page > 1 && page < totalPages && (
          <>
            <button onClick={onPrev}>Pagina anterio</button>
            <button onClick={onNext}>Carregar mais...</button>
          </>
          )}
          {page == totalPages && (<button onClick={onPrev}>Pagina anterior</button>)}     
        </div>
      </div>
    </div>

  );
}
