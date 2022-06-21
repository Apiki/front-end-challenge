import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Caa = (x) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ x.imagem ? 'https://image.tmdb.org/t/p/w500'+ x.imagem : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pdTz5L8m-BnQaPfYvrKXSpvTxri_DDtSqw&usqp=CAU'} />
  <Card.Body className='text-dark'>
    <Card.Title>{x.marca} - {x.modelo}</Card.Title>
    <Card.Text className='text-dark'>
      <strong>idioma : </strong>{x.cor}
    </Card.Text>
    <Card.Text className='text-dark'>
      <strong>data de inicio : </strong>{x.ano}
    </Card.Text>
    <Button variant={x.core ? x.core : 'danger'}><Link className='btn text-white' to={'/series/'+x.id}>{x.nomebotao}{x.id}</Link></Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Caa
