import React from 'react'
import{ Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from "./menu.module.css"
import logo from './logo.jpeg'
const Menu = ({black}) => {
  return (
<div className='sombra' >

  <Navbar className={styles.nav}  variant="light" expand="lg" sticky='top'>
    <Link className={'btn btn-danger '+ styles.bt} to={-1} >Back</Link>
    <img src={logo} alt='' className={styles.logo}></img>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="align-right">
      <Link className='nav-link' to="/filmes/populares" >Home</Link>
        <Link className='nav-link' to="/carros" >ajuda</Link>
        
        <NavDropdown menuVariant='dark' title="linguas" id="basic-nav-dropdown">
          <Link className='nav-link' to="/en" >English</Link>
          <Link className='nav-link' to="/eps" >español</Link>      
        </NavDropdown>
      </Nav>
    <Link className={'btn btn-dark '+ styles.bt2} to={-1} >Sign Up</Link>
    </Navbar.Collapse>
  </Container>
  </Navbar>
 
  </div>
  )
}

export default Menu