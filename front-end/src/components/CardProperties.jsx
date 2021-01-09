import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';


const CardProperties = ({ title, description, picture, habitation, region, price }) => {
  return (
    <div className="ml-3 mb-3">
      <Card style={{ width: '18rem', height: '27rem' }}>
        <Card.Img variant="top" src={picture} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{habitation}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Text className="d-inline text-primary">{region}</Card.Text>
          <Card.Text className="d-inline ml-3 text-success">Valor R$ {price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};

export default CardProperties;
