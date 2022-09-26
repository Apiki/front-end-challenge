import { HeaderContainer } from './styles'
import logoImg from '../../assets/Apiki-logo.webp'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../pages/home'
import { useState } from 'react'

interface HeaderProps {
  post: IPost
}
export function Header({ post }: HeaderProps) {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoImg} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
