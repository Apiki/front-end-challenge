import React, { useContext, useState, useEffect } from 'react';
import services from '../services';
import PageContext from '../context/PageContext';
import Pagination from '../components/Pagination';
import ArticleList from '../containers/ArticleList';
import { MetaTags } from 'react-meta-tags';

const Home = () => {
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
      const article_array = articles_list.map((article) => ({
          id: article.id,
          img_src: article._embedded['wp:featuredmedia']?.length 
            && article._embedded['wp:featuredmedia'][0].source_url,
          img_alt: article._embedded['wp:featuredmedia']?.length
            && article._embedded['wp:featuredmedia'][0].alt_text,
          article_title: article.title.rendered, 
          article_description: article.excerpt.rendered,
          author_name: article._embedded.author?.length 
            && article._embedded.author[0].name,
          slug: article.slug
        })
      )
      setArticles([...article_array]) 
    }
    getData()
  }, [pageCurrent])

  return (
      <>
        <MetaTags>
          <title>Apiki Blog</title>
          <link rel="canonical" href="/" />
          <meta
            name="description"
            content="Blog especialista em desenvolvimento WordPress."
          />
          <meta property="og:title" content="Blog sobre WordPress" />
        </MetaTags>
        <ArticleList articles={articles} />
        <Pagination />
      </>
  )
};

export default Home;
