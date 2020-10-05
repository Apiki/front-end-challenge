import React, { useEffect, useState } from 'react';
import apiSlug from '../services/apiSlug';

export default function Interna(props) {
  const slug = props.match.params.slug;
  const [content, setContent] = useState(null);
  const [data, SetData] = useState(null);
  useEffect(() => {
    apiSlug(slug).then((e) => {
      SetData(e);
      setContent(e.content.rendered);
    });
  }, []);
  useEffect(() => {
    if (content) {
      const divContent = document.getElementById('content');
      divContent.insertAdjacentHTML('beforeend', content);
    }
  }, [content]);
  if (!content || !data) return null;
  console.log(data);
  return (
    <div className='padme'>
      <article id="content">
        <h1>{data.title.rendered}</h1>
        <h2>{data._embedded.author[0].name}</h2>
      </article>
    </div>
  );
}
