import React, { useContext, useState, useEffect } from 'react';
import services from '../services';
import PageContext from '../context/PageContext';
import { ConstainerPostList } from '../styles/ArticleList';
import Article from '../components/Article';
import Header from './Header';

const ArticleList = () => {
    const { pageCurrent, setPageTotal } = useContext(PageContext)
    const [articles, setArticles] =  useState([])

    useEffect(() => {
      const getData = async() => {
        const articles_list = await services.getArticleList(pageCurrent, setPageTotal)
        setArticles(articles_list)
      }
      getData()
    }, [pageCurrent])
    
    return (
    <>
    <Header />
      <ConstainerPostList>
      {articles.map((article) => (
        <Article
          key={article.id}
          img_src={article._embedded['wp:featuredmedia'][0].source_url} 
          img_desc={article._embedded['wp:featuredmedia'][0].alt_text} 
          article_title={article.title.rendered} 
          article_description={article.yoast_head_json.og_description}
          slug={article.slug}
        />)
      )}
    </ConstainerPostList>
    </>
    )
};  

export default ArticleList;
