import React from 'react';
import style from './style.module.css';

export default function ContentDisplay({ content }) {
  return (
    <div className={style.container}>
      <h1>{content.title}</h1>
      <p>{content.author[0].name}</p>
      <div>
        <img src={content.medium.source_url} alt="Content" />
      </div>
      <div className={style.container__content} dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  );
}
