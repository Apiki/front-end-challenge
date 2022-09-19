import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { ThemeContext } from '../../context/themeProvider';
import conector from '../../utils/conector';
import Cabecalho from '../../components/Cabecalho';
import BarraDeCompartilhamento from '../../components/Compartilhamento';
import themes from '../../themes/temas.module.scss';
import styleFS from '../Home/index.module.scss';
import style from './index.module.scss';

export default function Post() {
  const [carregamento, setCarregamento] = useState(true);
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const { modoEscuro } = useContext(ThemeContext);

  const carregarPost = async () => {
    const resposta = await conector.get(`posts?_embed&slug=${slug}`);
    setPost(resposta && resposta.data[0]);
  };

  useEffect(() => {
    carregarPost().then(() => setCarregamento(!!post));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    carregarPost();
  }, [slug]);

  return (
    <div className={`${modoEscuro ? themes.bgEscuro : themes.bgClaro} ${style.tela}`}>
      <Cabecalho />
      {!carregamento
      && (
      <main className={style.container}>
        <h1>{post && parse(DOMPurify.sanitize(post.title.rendered))}</h1>
        <img
          className={style.imagens}
          src={post && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url}
          alt="imagem do post"
        />
        <article>{post && parse(DOMPurify.sanitize(post.content.rendered))}</article>
        <BarraDeCompartilhamento link={post.link} round size={50} gap={20} />
      </main>
      )}
      {carregamento
      && (
      <div className={styleFS.carregando}>
        <h3>Carregando...</h3>
      </div>
      )}
    </div>
  );
}
