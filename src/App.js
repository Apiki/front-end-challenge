/*
 * Importar dependências remotas
 */
import React, { useState, useEffect } from "react";
import Axios from "axios";

// ALTERE ISSO PARA O URL DO SEU SITE DO WORDPRESS.
const baseUrl = "https://blog.apiki.com";

export default function App() {
  // Rastreie o estado das postagens, página atual e número de páginas
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  // Quando o número da página muda, ligue para a api para obter postagens.
  useEffect(() => {
    Axios.get(baseUrl + "/wp-json/wp/v2/posts?_embed&categories=518", {
      params: { page: page }
    }).then(response => {
      // Armazene o número de páginas possíveis.
      setNumberofpage(response.headers["x-wp-totalpages"]);
      // Armazene as postagens da resposta.
      setPosts(response.data);
    });
  }, [page, setPosts]);

  // Manipulador de eventos: reduza a contagem de páginas não inferior a 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Manipulador de eventos: Aumente a contagem de páginas não mais que nrofpages.
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <section className="servicos">
      
        {console.log(posts)}
      <div className="center">
        <div className="title-servicos">
        <h3>Listar dos ultimos posts <br /><i className="fa fa-angle-down"></i></h3>
        </div>
      
        {posts &&
          posts.length &&
          posts.map((post, index) => {
            return (
              <li className="flex-servicos">
                <article key={post.id} className="box-servicos">
                    
                      {post._embedded['wp:featuredmedia'] &&
                          <div className="image">
                              <img src={post && post._embedded && post._embedded['wp:featuredmedia'][0].source_url} />  
                          </div>
                      }
                  <div className="box-wraper"> 
                      <h3><a href={post.link}>
                          {post.title.rendered}
                      </a></h3>
                      <br />
                      <h3><a className="tbn2" href={post.link} target="_blank">
                      Saiba mais
                      </a></h3>
                  </div> 
                </article>
              
            </li>
            );
          })}
      </div>
    </section>
  );
}
