import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/cards.css'

function Cards({ posts }) {

  const removeTags = (post) => {
    const string = post.excerpt.rendered || post.title.rendered ;
    let newString = string.substring(string.indexOf('<p>') + 3, string.lastIndexOf('</p>'));
    // referencia ao amigo neste link=> https://www.ti-enxame.com/pt/javascript/remova-todos-os-caracteres-especiais-exceto-o-espaco-de-uma-string-usando-javascript/972189374/
    newString = newString.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    console.log(newString);
    return newString;
  }

  const renderPosts = () => (
    posts.map( post => (
      <Card
        key={ post.id }
        className='d-flex flex-row m-3 main-card shadow mb-4 bg-body rounded'
      >
        <Card.Img
          variant='top'
          alt={ post.slug }
          src={ post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : post.slug }
          className="w-50"
        />
        <Card.Body className='align-self-center'>
          <Link
            to={ `/details/${ post.slug }` }
            className="text-center text-decoration-none mb-3 text-dark"
          >
            <Card.Title className='card-link text-center'>
              { removeTags(post) }
            </Card.Title>
          </Link>
          <p className="d-flex text-center mt-4">{ removeTags(post) }</p>
        </Card.Body>
      </Card>
    ))
  )

  return (
    <div class='d-flex flex-wrap w-50'>
      { renderPosts() }
    </ div>
  );
}

export default Cards;
