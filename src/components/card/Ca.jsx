import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styles from './ca.module.css'
const Ca = (x) => {
  return (
    <div>
      {/* definição de tamanho do card react bootstrap */}
      <Card style={{ width: '18rem' , height: '23.5rem' }} className={styles.ca} >
        {/* imagem do card com placeholder */}
  <Card.Img variant="top" className={styles.cai} src={ x.imagem ?  x.imagem : 'https://ibtaini.com/wp-content/themes/pandastore/assets/images/placeholders/post-placeholder.jpg'} />
  <Card.Body>
    {/* titulo do card com status de publicação */}
    <Card.Title>{x.marca} - {x.modelo}</Card.Title>
    
    {/* botao com nome automatico definido pelo componente como propriedade */}
    <Link className={'btn '+styles.bt} to={'busca/'+x.id}>{x.nomebotao}{' '}</Link>
   
  </Card.Body>
</Card>
    </div>
  )
}

export default Ca
