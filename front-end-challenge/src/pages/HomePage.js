import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchBaseUrl } from '../services/apikiAPI'
import Header from '../components/Header';
import Loading from '../components/Loading';
import PostCard from '../components/PostCard';
import MoreButton from '../components/MoreButton';
import Footer from '../components/Footer';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  let { page = 1 } = useParams();

  useEffect(() => {
    fetchBaseUrl(page)
      .then((response) => {
        for (let pair of response.headers.entries()) {
          if (pair[0] === 'x-wp-totalpages') setTotalPages(pair[1]);
        }
        return response.json();
      })
      .then((json) => Promise.resolve(json))
      .then((posts) => {
        setPosts([ ...posts ]);
        setLoading(false);
      })
  });

  if (loading) return <Loading/>
  return (
    <div className="HomePage">
      <Header/>
     <div className="row">
       <div className="col m-4">
        <span className="text-muted ">{`Página ${page} de ${totalPages}`}</span>
       </div>
     </div>
      <div className="row mb-2">
      { // Listagem de 10 posts.
        posts.map((elem) => <PostCard key={elem.id} elem={elem}/> ) 
      }
      </div>

      <div className="row">
          { // Se o número referente a  página atual for menor que a quantidade de páginas, então mostrará o botão de carregar mais.
            (parseInt(page) < parseInt(totalPages)) && <MoreButton page={page} /> 
          }
      </div>

      <Footer/>

    </div>
  );
}

export default HomePage;
