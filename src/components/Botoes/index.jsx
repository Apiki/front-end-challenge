import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import style from './index.module.scss';

export default function CarregarMais({ carregarMais }) {
  return (
    <div className={style.container}>
      <Button className={style.botao} variant="text" onClick={() => carregarMais()}>
        Carregar Mais
      </Button>
    </div>
  );
}

CarregarMais.propTypes = {
  carregarMais: PropTypes.func,
};
