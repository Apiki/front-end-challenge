import React from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../../../assets/images/sprite-svg/chevronLeft.svg';

export default function BackButton() {
  return (
    <Link alt="Back to home" title='Back to home' to="/" onClick={() => { window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }) }}>
      <button className="c-button-back">
        <img src={chevronLeft} alt="Back to last page" />
        <span>Voltar para página inicial</span>
      </button>
    </Link>
  );
}
