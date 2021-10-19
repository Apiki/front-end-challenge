import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/cards.css'

function Cards({ posts }) {

  const removeTags = (post) => {
    const string = post.rendered;

    if(post.protected === false) {
      // link que me ajudou na resolução => https://www.codegrepper.com/code-examples/javascript/convert+a+string+to+html+element+in+js
      // converte strings com tags html em elementos html
      const parser = new DOMParser();
      const doc = parser.parseFromString(string, 'text/html').querySelector('p').textContent;

      return doc;
    }

    return string;
  }

  const renderPosts = () => (
    posts.map( post => (
      <Card
        key={ post.id }
        className='d-flex flex-row m-3 main-card shadow mb-4 bg-body rounded'
      >
        <Card.Img
          variant='top'
          className='w-50'
          alt={ post.slug }
          src={ post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : post.slug }
        />
        <Card.Body className='align-self-center'>
          <Link
            to={ `/details/${ post.slug }` }
            className='text-center text-decoration-none mb-3 text-dark'
          >
            <Card.Title className='card-link text-center'>
              { removeTags(post.title) }
            </Card.Title>
          </Link>
          <p className='d-flex text-center mt-4'>{ removeTags(post.excerpt) }</p>
        </Card.Body>
      </Card>
    ))
  )

  return (
    <div className='d-flex flex-wrap w-50'>
      { renderPosts() }
    </ div>
  );
}

export default Cards;
