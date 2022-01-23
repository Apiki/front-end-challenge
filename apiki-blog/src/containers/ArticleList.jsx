import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import services from '../services';
import PageContext from '../context/PageContext';
import { ContainerArticleList } from '../styles/ArticleList';
import Article from '../components/Article';
import Header from './Header';



const ArticleList = () => {
    const { pageCurrent, setPageTotal } = useContext(PageContext)
    const [articles, setArticles] =  useState([{
      id: '',
      img_src: '',
      img_alt: '',
      article_title: '',
      article_description: '',
      author_name: '',
      slug: ''
    }])
    useEffect(() => {
      const getData = async() => {
        const articles_list = await services.getArticleList(pageCurrent, setPageTotal)
        const article_array = []
        articles_list.map((article) => {
          article_array.push({
            id: article.id,
            img_src: article._embedded['wp:featuredmedia'][0].source_url,
            img_alt: article._embedded['wp:featuredmedia'][0].alt_text,
            article_title: article.title.rendered, 
            article_description: article.excerpt.rendered,
            author_name: article._embedded.author[0].name,
            slug: article.slug
          })
        })
        console.log(article_array)
        setArticles([...article_array]) 
      }
      getData()
    }, [pageCurrent])
    
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
