import React, {useState} from 'react';
import './style/NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const [regionSelected, setRegionSelected] = useState('');

  console.log(regionSelected);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">SIRP Locações</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Alugar</Nav.Link>
          <NavDropdown title="Buscar por Região" id="collasible-nav-dropdown">
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="Belo Horizonte">Belo Horizonte</NavDropdown.Item>
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="Contagem">Contagem</NavDropdown.Item>
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="Betim">Betim</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="">Todas Regiões</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/register">Cadastrar</Nav.Link>
          <Nav.Link eventKey={2} href="/login">Login </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;
