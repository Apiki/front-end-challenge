import React, { useContext } from 'react';
import BlogContext from '../Context/BlogContext';
import { fetchFunction } from '../Api/index';
import '../Css/InitialPage.css';

function LoadMore() {
  const {
    page,
    setPage,
    posts,
    setPosts,
  } = useContext(BlogContext);

  // useEffect(() => {
  // }, []);

  const handleClick = () => {
    fetchFunction(`/wp-json/wp/v2/posts?_embed&categories=518&page=${page + 1}`).then((response) => {
      setPosts([...posts, ...response]);
    });
    setPage(page + 1);
  }


  return (
    <div>
      <button className="button-style" type="button" onClick={ () => handleClick() }>Carregar Mais</button>
    </div>
  );
}

export default LoadMore;
