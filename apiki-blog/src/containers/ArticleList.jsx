import React from 'react';
import { ContainerArticleList } from '../styles/ArticleList';
import Article from '../components/Article';
import Header from './Header';

const ArticleList = ({articles}) => {    
    return (
    <>
      <Header />
      <ContainerArticleList>
      {articles.map((article) => (
        <Article
          key={article.id}
          img_src={article.img_src} 
          img_alt={article.img_alt} 
          article_title={article.article_title} 
          article_description={article.article_description}
          author={article.author_name}
          slug={article.slug}
        />)
      )}
    </ContainerArticleList>
    </>
    )
};  

export default ArticleList;
