import React from 'react';
import { useLocation } from 'react-router-dom';
import ArticleShow from '../components/ArticleShow';

const ArticleDetail = () => {
  const location = useLocation();
  const mockFetch = [{
    _embedded: {
      'wp:featuredmedia': [
        {
          source_url: 'https://blog.apiki.com/wp-content/uploads/sites/2/2020/07/Como-habilitar-os-recursos-ocultos-do-Gutenberg-no-seu-tema-WordPress-open-graph.png',
        },
      ],
    },
    title: {
      rendered: 'Como habilitar os recursos ocultos do Gutenberg no seu tema WordPress',
    },
    slug: 'como-habilitar-os-recursos-ocultos-do-gutenberg-no-seu-tema-wordpress',
  }];
  return(
    <div>
      <div>Endereço Artigo {location.pathname}</div>
      <ArticleShow content={mockFetch} />
    </div>
  );
};

export default ArticleDetail;