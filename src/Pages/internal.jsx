import React, { useEffect, useState } from 'react';
import apiSlug from '../services/apiSlug';
import copyIcon from '../icons/copy-icon-4797.png';
import CopyButton from '../componets/copyButton';
import { Redirect } from 'react-router-dom';

export default function Interna(props) {
  const slug = props.match.params.slug;
  const [data, SetData] = useState(null);
  useEffect(() => {
    apiSlug(slug).then((e) => {
      SetData(e);
      const { content, excerpt } = e;
      includeHTML(content.rendered, 'content', 'beforeend');
      includeHTML(excerpt.rendered, 'subtitle', 'beforeend', true);
      extractingImg();
      window.scrollTo(0, 0);
    });
  }, []);
  if (slug.length < 3) return <Redirect to="/NotFound" />;
  if (!data) return null;
  const test = document.getElementById('content');
  return (
    <div className="padme">
      <article className="content" id="content">
        <h1 className="title">{data.title.rendered}</h1>
        <h2 id="subtitle" className="subtitle"></h2>
        <div className="autor-copy">
          <h3 className="subtitle author">By: {data._embedded.author[0].name}</h3>
          <CopyButton data={data.link} />
        </div>
      </article>
    </div>
  );
}

function includeHTML(content, placeId, position, extract = false) {
  const divContent = document.getElementById(placeId);
  divContent.insertAdjacentHTML(position, content);
  if (extract) {
    const pChild = divContent.firstChild;
    divContent.innerHTML = pChild.innerHTML;
  }
}
function extractingImg(base = null) {
  if (base === null) base = document.getElementById('content');
  if (base.children.length > 2 && base.className !== 'content') return null;
  for (let index = 0; index < base.children.length; index++) {
    const element = base.children[index];
    extractingImg(element);
    if (['P', 'FIGURE', 'DIV'].includes(element.nodeName.toUpperCase())) {
      if (
        element.childNodes.length === 1 &&
        ['IMG', 'TABLE', 'IFRAME'].includes(element.childNodes[0].nodeName.toUpperCase())
      ) {
        element.after(element.childNodes[0]);
        element.parentElement.removeChild(element);
      }
      if (
        element.childNodes.length === 2 &&
        element.childNodes[0].nodeName === 'IMG' &&
        element.childNodes[1].nodeName === 'FIGCAPTION'
      ) {
        element.after(element.childNodes[0]);
        element.after(element.childNodes[0]);
        /* element.parentElement.removeChild(element); */
      }
    }
  }
}
