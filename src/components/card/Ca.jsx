import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styles from './ca.module.css'
const Ca = (x) => {
  return (
    <div>
      <Card style={{ width: '18rem' , height: '23.5rem' }} className={styles.ca} >
  <Card.Img variant="top" className={styles.cai} src={ x.imagem ?  x.imagem : 'https://ibtaini.com/wp-content/themes/pandastore/assets/images/placeholders/post-placeholder.jpg'} />
  <Card.Body>
    <Card.Title>{x.marca} - {x.modelo}</Card.Title>
    
    
    <Link className={'btn '+styles.bt} to={'busca/'+x.id}>{x.nomebotao}{' '}</Link>
   
  </Card.Body>
</Card>
    </div>
  )
}

export default Ca
