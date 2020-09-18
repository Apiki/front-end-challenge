import React, { useEffect } from 'react';
import { apikiPagesAPI } from '../services/apikiAPI';

export default function CarregarMais() {
  useEffect(() => {
    fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2`)
      .then((response) => {
        console.log(response.json());
    })
  }, []);

  return (
    <button
      type="button"
    >
      Carregar mais...
    </button>
  );
}
