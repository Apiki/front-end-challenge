import React, { useContext } from 'react';
import BlogContext from '../Context/BlogContext';
import { fetchFunction } from '../Api/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      <Link onClick={ () => handleClick()} to={ `/post/${slug}` } >
        <h2>{ title }</h2>
      </Link>
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Card;
