import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import style from './index.module.scss';
import themes from '../../themes/temas.module.scss';
import { ThemeContext } from '../../context/themeProvider';

export default function Cabecalho() {
  const { modoEscuro, trocaTema } = useContext(ThemeContext);
  return (
    <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2} className={style.container}>
      <Box gridColumn="span 1">
        <Link to="/">
          <img
            className={style.logo}
            width="636"
            height="208"
            src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png"
            alt="logo"
            loading="lazy"
            srcSet="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png 636w, https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01-300x98.png 300w, https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01-150x49.png 150w"
            sizes="(max-width: 636px) 100vw, 636px"
          />
        </Link>
      </Box>
      <Box gridColumn="span 4">
        <Link to="/">
          <h1 className={`${modoEscuro ? themes.tituloEscuro : themes.tituloClaro} ${style.titulo}`}>
            Blog Apiki
          </h1>
        </Link>
      </Box>
      <Box gridColumn="span 1">
        <IconButton onClick={() => trocaTema()}>
          {modoEscuro
            ? <DarkModeIcon className={themes.iconeEscuro} />
            : <LightModeIcon className={themes.iconeClaro} />}
        </IconButton>
      </Box>
    </Box>

  );
}
