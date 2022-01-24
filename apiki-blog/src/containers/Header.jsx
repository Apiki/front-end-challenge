import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Logo, ContainerInner } from '../styles/Header';
import PageContext from '../context/PageContext';
import logo from '../assets/logo.webp'

const Header = () => {
	const { setPageCurrent, pageCurrent } = useContext(PageContext)
  const location = useLocation()
	return (
    <Container>
				<ContainerInner>
					<Logo src={logo} />
					<Link to='/' onClick={() => setPageCurrent(1)}>Página Inicial</Link>
					{pageCurrent !== 1 
					&& location.pathname !== '/' 
					&& <Link to='/'>Voltar</Link>}
				</ContainerInner>
    </Container>);
};

export default Header;
