import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [habitation, setHabitation] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [priceLease, setPriceLease] = useState('');
  const [city, setCity] = useState('');

  const propertyToPost = {
    title,
    description,
    habitation,
    urlImage,
    priceLease,
    city
  };

  const submitProperty = () => {
    axios.post('', propertyToPost).then(() => {

    });
  }

  console.log(propertyToPost);
  
  return (
    <div>
      <NavBar />
      <div className="container">
        <Form onSubmit={submitProperty}>
          <Form.Group  controlId="formGridEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control required placeholder="Ex: Apartamento padrão Bh" onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group  controlId="formGridPassword">
            <Form.Label>Descrição</Form.Label>
            <Form.Control required placeholder="Ex: More na região central de Betim" onChange={e => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Habitação</Form.Label>
            <Form.Control required placeholder="Ex: Apartamento 3 quartos 2 vagas de garagem" onChange={e => setHabitation(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Endereço da imagem</Form.Label>
            <Form.Control required placeholder="Digite a URL da imagem"  onChange={e => setUrlImage(e.target.value)} />
          </Form.Group>

          <Form.Row>
            <Form.Group  controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control as="select" onChange={e => setCity(e.target.value)}>
                <option>Escolha a cidade</option>
                <option>Belo Horizonte</option>
                <option>Contagem</option>
                <option>Betim</option>
              </Form.Control>
            </Form.Group>
            <Form.Group   controlId="formGridZip">
              <Form.Label>Preço do Aluguel</Form.Label>
              <Form.Control onChange={e => setPriceLease(e.target.value)}/>
            </Form.Group>
            
          </Form.Row>

          <Form.Group   id="formGridCheckbox">
            <a target="blank" href="https://jusbrasilmodelos.jusbrasil.com.br/modelos-pecas/784909844/modelo-termos-e-condicoes-para-site-ou-app?ref=feed">Termo de condições</a>
            <Form.Check type="checkbox"/>
          </Form.Group>
          <Button variant="primary" type="submit"> Submit</Button>
        </Form>
      </div>
      <Footer />
    </div>
  )
}



export default Register;


