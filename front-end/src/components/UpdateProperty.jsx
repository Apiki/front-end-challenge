import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateProperty = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [habitation, setHabitation] = useState('');
  const [picture, setUrlImage] = useState('');
  const [price, setPriceLease] = useState('');
  const [region, setCity] = useState('');

  console.log(props.location.state)
  return (
    <div>
      <NavBar />
      <Form style={{fontSize: "1.2rem"}}>
          <Form.Group controlId="formGridEmail">
            <Form.Label >Título</Form.Label>
            <Form.Control value={''} onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Descrição</Form.Label>
            <Form.Control  onChange={e => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Habitação</Form.Label>
            <Form.Control  onChange={e => setHabitation(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Endereço da imagem</Form.Label>
            <Form.Control  onChange={e => setUrlImage(e.target.value)} />
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control as="select" onChange={e => setCity(e.target.value)}>
                <option>Escolha a cidade</option>
                <option>Belo Horizonte</option>
                <option>Contagem</option>
                <option>Betim</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridZip">
              <Form.Label className="ml-2">Preço do Aluguel</Form.Label>
              <Form.Control className="ml-2" onChange={e => setPriceLease(e.target.value)} />
            </Form.Group>
          </Form.Row>
          <Form.Group id="formGridCheckbox">
            <a target="blank" href="https://jusbrasilmodelos.jusbrasil.com.br/modelos-pecas/784909844/modelo-termos-e-condicoes-para-site-ou-app?ref=feed">Termo de condições</a>
            <Form.Check required type="checkbox" />
          </Form.Group>
          {/* <Button onClick={() => submitProperty()} variant="primary" type="submit"> Submit</Button> */}
        </Form>
      <Footer />
    </div>
  );
}

export default UpdateProperty;
