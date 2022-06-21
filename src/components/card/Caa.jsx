import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Caa = (x) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ x.imagem ? 'https://image.tmdb.org/t/p/w500'+ x.imagem : 'https://www.prescriptum.com.br/wp-content/uploads/2015/12/placeholder-usuario-500x500.jpg'} />
  <Card.Body className='text-dark'>
    <Card.Title>{x.marca} - {x.modelo}</Card.Title>
    <Card.Text className='text-dark'>
      <strong>personagem : </strong>{x.cor}
    </Card.Text >
    <Card.Text className='text-dark'>
      <strong>gender : </strong>{x.ano===1? 'Feminino': (x.ano ===2?'Masculino':'Indefinido')}
    </Card.Text>
    <Button variant={x.core ? x.core : 'danger'}><Link className='btn text-white' to={'/atores/detalhe/'+x.id}>{x.nomebotao}{x.id}</Link></Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Caa
