import React from 'react';
import style from './style.module.css';
import ContinueButton from '../continueButton';

export default function Post({ content }) {
  return (
    <div className={style['post-container']}>
      <h2 className={style['post-container__title']}>{content.title}</h2>
      <div className={style['post-container__image-container']}>
        <img className={style['post-container__image-container__thumbnail']} src={content.medium.source_url} alt="thumbnail" />
      </div>
      <div className={style['post-container__content-container']}>
        <p className={style['post-container__content-container__content']} dangerouslySetInnerHTML={{ __html: content.content }} />

      </div>
      <ContinueButton content={content} />

    </div>
  );
}
