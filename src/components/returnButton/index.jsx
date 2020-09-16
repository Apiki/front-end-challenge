import React from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import style from './style.module.css';

export default function ReturnButton() {
  return (
    <Link className={style['return-button']} to={routes.main}>
      <GrFormPreviousLink className={style['return-button__icon']} /> Voltar
    </Link>
  );
}
