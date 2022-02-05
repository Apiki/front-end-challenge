import React, { useState, useEffect } from 'react';
import { api } from "./services/api";

// Componentes
import { PostCard } from './components/PostCard';
import { Header}  from './components/Header';
import { Paginacao } from './components/Paginacao';

// Estilos
import { GlobalStyle } from "./styles/global";
import { BtnContainer, ContainerPost, TextContainer } from './styles/styles';

function App() {
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(undefined)

  useEffect(() => {
    
    const loadAll = async (url) => {
      let list =  await api(url)
      setPostList(list);
    }

    if (currentPage === 1) {
      setTotalPage(17);
    }

    loadAll(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`);

  }, [currentPage])

  console.log(postList)

  function handleLoadMoreButton() {
    if (currentPage <= totalPage) {
      setCurrentPage(prev => prev + 1)
    }

  }
  
  return (
    <>
      <Header />

      <TextContainer>
        <p>Veja as últimas postagens do blog com a categoria Desenvolvimento</p>
      </TextContainer>

      <ContainerPost>
        {postList.map((item) => (
          <PostCard 
            title={item.title.rendered} 
            imagem={item._embedded['wp:featuredmedia'][0].source_url}
            slug={item.slug}
            key={item.id} 
          />
        ))}
      </ContainerPost>

      <BtnContainer>
        <Paginacao category={'Carregar mais'} onClick={handleLoadMoreButton} />
      </BtnContainer>

      <GlobalStyle />
    </>
  );
}

export default App;
