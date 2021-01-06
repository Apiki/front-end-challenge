import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style/font.css';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [habitation, setHabitation] = useState('');
  const [picture, setUrlImage] = useState('');
  const [price, setPriceLease] = useState('');
  const [region, setCity] = useState('');
  const [registed, setRegisted] = useState(false);

  const propertyToPost = {
    title,
    description,
    habitation,
    picture,
    price,
    region
  };

  const headers = { 'Content-Type': 'application/json' }

  const submitProperty = async () => {
    axios.post('https://localhost:5001/v1/property', propertyToPost, { headers: headers})
      .then((res) => res)
      .catch((error) => error);
      alert("Cadastrado com sucesso");
      setRegisted(true);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
      <h2  className="text-primary py-4">Cadastrar Imóveis</h2>
      <h5>Preencha os campos corretamente!</h5>
        <Form style={{fontSize: "1.2rem"}}>
          <Form.Group controlId="formGridEmail">
            <Form.Label >Título</Form.Label>
            <Form.Control required placeholder="Ex: Apartamento padrão Bh" onChange={e => setTitle(e.target.value)} />
            <span className="fontRed">Título até 50 caracteres</span>
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Descrição</Form.Label>
            <Form.Control required placeholder="Ex: More na região central de Betim" onChange={e => setDescription(e.target.value)} />
            <span className="fontRed">Descrição até 50 caracteres </span>
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Habitação</Form.Label>
            <Form.Control required placeholder="Ex: Apartamento 3 quartos 2 vagas de garagem" onChange={e => setHabitation(e.target.value)} />
            <span className="fontRed">Cômodos mínimp 10 caracteres</span>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Endereço da imagem</Form.Label>
            <Form.Control required placeholder="Digite a URL da imagem" onChange={e => setUrlImage(e.target.value)} />
            <span className="fontRed">Digite a Url mínimo 10 caracteres</span>
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
              <span className="fontRed">  Apenas números inteiro</span>
              <Form.Control required className="ml-2" onChange={e => setPriceLease(e.target.value)} />
            </Form.Group>
          </Form.Row>
          <Form.Group id="formGridCheckbox">
            <a target="blank" href="https://jusbrasilmodelos.jusbrasil.com.br/modelos-pecas/784909844/modelo-termos-e-condicoes-para-site-ou-app?ref=feed">Termo de condições</a>
            <Form.Check required type="checkbox" />
          </Form.Group>
          <Button onClick={() => submitProperty()} variant="primary" type="submit"> Submit</Button>
        </Form>
        {registed && <Redirect to="/" />}
      </div>
      <Footer />
    </div>
  )
};



export default Register;


