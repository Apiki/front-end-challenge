import React from 'react';
import logo from '../../images/logo.png';
import { HeaderContainer } from './style';
export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt='Apiki Logo' />
    </HeaderContainer>
  )
}
