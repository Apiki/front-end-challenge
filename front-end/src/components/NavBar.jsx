import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { contextLease } from '../context/context';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const { setRegionSelected} = useContext(contextLease);
  const endPoint = useLocation().pathname;


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">SIRP Locações</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Alugar</Nav.Link>
          {endPoint === '/' ? 
          <NavDropdown title="Buscar por Região" id="collasible-nav-dropdown">
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="Belo Horizonte">Belo Horizonte</NavDropdown.Item>
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="Contagem">Contagem</NavDropdown.Item>
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="Betim">Betim</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onSelect={(e) => setRegionSelected(e)} eventKey="">Todas Regiões</NavDropdown.Item>
          </NavDropdown> 
          : <Nav.Link href="/">Voltar</Nav.Link>}
        </Nav>
        <Nav>
          <Nav.Link href="/register">Cadastrar</Nav.Link>
          <Nav.Link  href="/login">Login </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;
