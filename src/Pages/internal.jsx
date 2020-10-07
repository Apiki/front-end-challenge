import React, { useEffect, useState } from 'react';
import apiSlug from '../services/apiSlug';

export default function Interna(props) {
  const slug = props.match.params.slug;
  const [data, SetData] = useState(null);
  /*   const [content, setContent] = useState(null);
  const [excerpt, setExcerpt] = useState(null); */
  useEffect(() => {
    apiSlug(slug).then((e) => {
      SetData(e);
      const { content, excerpt } = e;
      includeHTML(content.rendered, 'content', 'beforeend');
      includeHTML(excerpt.rendered, 'subtitle', 'beforeend', true);
    });
  }, []);
  if (!data) return null;
  console.log(data);
  return (
    <div className="padme">
      <article className="content" id="content">
        <h1 className="title">{data.title.rendered}</h1>
        <h2 id="subtitle" className="title"></h2>
        <h3 className="subtitle author">By: {data._embedded.author[0].name}</h3>
      </article>
    </div>
  );
}

function includeHTML(content, placeId, position, extract = false) {
  const divContent = document.getElementById(placeId);
  console.log(divContent);
  divContent.insertAdjacentHTML(position, content);
  if (extract) {
    const pChild = divContent.firstChild;
    divContent.innerHTML = pChild.innerHTML;
  }
}
