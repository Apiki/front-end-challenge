import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
const Contador = () => {
    //declaração state numero
    let [numero, setNumero] = useState()
    
  return (
    <div>
     
     <Button variant='sucess' onClick={setNumero(++numero)}>+</Button>
     {numero}
     <Button variant='danger' onClick={setNumero(--numero)}>-</Button>
   
    </div>
  )
}

export default Contador