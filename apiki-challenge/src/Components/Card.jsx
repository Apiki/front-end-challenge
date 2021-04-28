import React, { useContext } from 'react';
import BlogContext from '../Context/BlogContext';
import { fetchFunction } from '../Api/index';
import { Link } from 'react-router-dom';
import '../Css/Card.css';

function Card(props) {
  const {
    setMediaPost,
  } = useContext(BlogContext);
  const { post } = props;
  const slug = post['slug'];
  const title = post['title']['rendered'];

  const handleClick = () => {
    fetchFunction(`/wp-json/wp/v2/posts?_embed&slug=${slug}`).then((response) => {
      setMediaPost(response[0]);
    });
  }

  return (
    <div className="card-container">
      <Link to={ `/post/${slug}` } onClick={ () => handleClick()}>
        <h2>{ title }</h2>
      </Link>
      {/* <button type="button" onClick={ () => handleClick() }>Botão</button> */}
    </div>
  );
}

export default Card;
