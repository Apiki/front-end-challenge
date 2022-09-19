/* eslint-disable import/order */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import Box from '@mui/material/Box';

export default function Cartao({
  url, conteudo, titulo, slug,
}) {
  return (
    <Box className={style.container}>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        <Box gridColumn="span 1" className={style.wrapper}>
          <img src={url} alt="Imagem destacada do post" className={style.imgCard} />
        </Box>
        <Box gridColumn="span 2">
          <Box display="grid" gridTemplateColumns="repeat(1)">
            <Box gridColumn="span 1">
              <div className={style.containerTitulo}>
                <h3 className={style.titulo}>{titulo}</h3>
              </div>
              <div className={style.containerLinhas}>
                <div className={style.linhas}>{conteudo}</div>
              </div>
            </Box>
            <Box gridColumn="span 1" className={style.containerLink}>
              <Link to={`post/${slug}`}>Ler mais</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Cartao.propTypes = {
  url: PropTypes.string,
  conteudo: PropTypes.array,
  titulo: PropTypes.string,
  slug: PropTypes.string,
};
