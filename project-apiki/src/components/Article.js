import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogApikiArticleApi } from '../services/blogApikiApi';

const Article = () => {

  const slug = useLocation().pathname.substring(1)
  
  useEffect(() => {
    blogApikiArticleApi(slug)
    .then((res) => console.log(res[0]))
  }, [])

  return (
    <div>

    </div>
  );
}

export default Article;
