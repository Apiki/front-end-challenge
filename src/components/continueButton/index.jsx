import React from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import style from './style.module.css';

export default function ContinueButton({ link, content }) {
  let url = link;
  if (content && !link) {
    url = `/${content.slug}`;
  }
  return (
    <div className={style.container}>
      <a className={style.container__link} href={url}>
        Continuar lendo <GrFormNextLink size={20} className={style.container__link__icon} />
      </a>
    </div>

  );
}
