import React from 'react'
import{ Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./menu.css"

const Menu = ({black}) => {
  return (
<div>
<header className={black ? 'black' : ''}>
  <Navbar className='nav'  variant="dark" expand="lg" >
  <Container>
    <Link className='btn btn-danger bt' to={-1} >Back</Link>
    <Navbar.Brand href=""> Testando React</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="align-right">
      <Link className='nav-link' to="" >Home</Link>
        <Link className='nav-link' to="/carros" >Carros</Link>
        <NavDropdown menuVariant='dark' title="Filmes" id="basic-nav-dropdown">
          <Link className='nav-link' to="/filmes/populares" >filmes populares</Link>
          <Link className='nav-link' to="/filmes/cartaz" >filmes cartaz</Link>
          <Link className='nav-link' to="/filmes/lancamento" >filmes lançamento</Link>        
        </NavDropdown>
        <NavDropdown menuVariant='dark' title="Series" id="basic-nav-dropdown">
          <Link className='nav-link' to="/series/populares" >series populares</Link>
          <Link className='nav-link' to="/series/cartaz" >series cartaz</Link>
          <Link className='nav-link' to="/series/lancamento" >series lançamento</Link>        
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  </header>  
  </div>
  )
}

export default Menu