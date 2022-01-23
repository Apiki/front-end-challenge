import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, ContainerInner } from '../styles/Header';
import PageContext from '../context/PageContext';
import logo from '../assets/logo.webp'

const Header = () => {
	const { setPageCurrent } = useContext(PageContext)
  return (
    <Container>
				<ContainerInner>
					<Logo src={logo} />
					<Link to='/' onClick={() => setPageCurrent(1)}>Página Inicial</Link>
				</ContainerInner>
    </Container>);
};

export default Header;
