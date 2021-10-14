import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Cards({ props }) {
  const LOCATION = useHistory();

  const renderPosts = () => (
    props.map((post, index) => {

    }
  ))

  return (
    <>
      {
        props.map((post) => (
          <Card key= { post.id }>
            <Card body>{ post.title.rendered }</Card>
          </Card>
        ))
      }
    </>
  );
}

export default Cards;
