import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/logo-apiki.webp'
import { Wrapper, Content } from '../Header/style'

const Header = () => {    
  
  return (
    <Wrapper>
      <Content>
        <Link to={`/`}>
          <img src={logo} alt="Apiki" />
        </Link>
      </Content>
    </Wrapper>
      
  );
}
  
export default Header;
  