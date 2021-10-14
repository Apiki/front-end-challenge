import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Cards({ posts }) {
  // const { location } = useHistory();

  const renderPosts = () => {
    // const { pathname } = location;

    const card = posts.map( post => (
      <Card
        key={ post.id }
        className='d-flex m-1 w-25 align-items-center shadow'
      >
        <Card.Img
          variant='top'
          alt={ post.slug }
          src={ post._embedded['wp:featuredmedia'][0].source_url }
        />
        <Card.Body>
          <Card.Title className='card-link text-center'>
            { post.title.rendered }
          </Card.Title>
        </Card.Body>
        <Link
          to={ `/details/${ post.slug }` }
          // target="_blank"
          className="text-center text-decoration-none mb-3"
        >
          { post.slug }
        </Link>
      </Card>
    ))
    return card;
  }

  return (
    <div class='d-flex flex-wrap justify-content-center'>
      { renderPosts() }
    </ div>
  );
}

export default Cards;
