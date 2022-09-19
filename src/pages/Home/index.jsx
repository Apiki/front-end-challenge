import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { ThemeContext } from '../../context/themeProvider';
import conector from '../../utils/conector';
import Cartao from '../../components/Card';
import Cabecalho from '../../components/Cabecalho';
import CarregarMais from '../../components/Botoes';
import themes from '../../themes/temas.module.scss';
import style from './index.module.scss';

export default function Inicio() {
  const [carregamento, setCarregamento] = useState(true);
  const [posts, setPosts] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [numPaginas, setNumPaginas] = useState(null);
  const { modoEscuro } = useContext(ThemeContext);

  const carregarPrimeiraPagina = async () => {
    const resposta = await conector.get('/posts?_embed&categories=518&page=1');
    setPosts(resposta.data);
    setNumPaginas(Number(resposta.headers['x-wp-totalpages']));
  };

  useEffect(() => {
    carregarPrimeiraPagina().then(() => setCarregamento(!!posts.length));
  }, []);

  const carregarMais = async () => {
    const resposta = await conector.get(`/posts?_embed&categories=518&page=${pagina + 1}`);
    setPosts((prevState) => [...prevState, ...resposta.data]);
    setPagina((prevState) => prevState + 1);
  };

  return (
    <div className={modoEscuro ? themes.bgEscuro : themes.bgClaro}>
      <Cabecalho />
      {!carregamento
      && (
      <>
        <div className={style.container}>
          {posts.length && posts.map((post) => (
            <Box
              className={[style.card, modoEscuro ? themes.cardEscuro : themes.cardClaro]}
              sx={{ boxShadow: 2 }}
              key={post.id && String(post.id)}
            >
              <Cartao
                url={post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url}
                titulo={post.title && parse(DOMPurify.sanitize(post.title.rendered))}
                slug={post.slug && post.slug}
                conteudo={parse(DOMPurify.sanitize(post.excerpt.rendered))}
              />
            </Box>
          ))}
        </div>
        { pagina < numPaginas && <CarregarMais carregarMais={carregarMais} />}
      </>
      )}
      {carregamento
      && (
      <div className={style.carregando}>
        <h3>Carregando...</h3>
      </div>
      )}
    </div>
  );
}
