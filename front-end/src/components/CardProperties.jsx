import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

const obj = {
  text: "Excelente localicazao",
  title: "Apartamento em bh",
  quartos: "2 quartos",

}

const CardProperties = () => {
  return (
    <div className="ml-3 mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://static.arboimoveis.com.br/AP0008_IMPR/celsopilati_-_0012.jpg" />
        <Card.Body>
          <Card.Title>{obj.title}</Card.Title>
          <Card.Text>{obj.text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{obj.quartos}</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Detalhes</Card.Link>
          <Card.Link href="#">Contato</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
};

export default CardProperties;
