import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, ContainerInner } from '../styles/Header';
import logo from '../assets/logo.webp'

const Header = () => {
  return (
    <Container>
				<ContainerInner>
					<Logo src={logo} />
					<Link to='/'>Página Inicial</Link>
				</ContainerInner>
    </Container>);
};

export default Header;
