import React from 'react'
import { Link } from 'react-router-dom'

import Hamburger from 'hamburger-react'

import Menu from './Menu'

import apikiLogo from '../imgs/apiki.png'
import worldLogo from '../imgs/icons/world.svg'

import '../css/Header.css'

function Header () {
  const [open, setOpen] = React.useState(false)

  return (
    <header id="header">
      <div id="header-container">
        <Hamburger
          size={30}
          onToggle={(toggled) => setOpen(toggled)}
          color="#fff"
        />

        <Link to="/">
          <img id="apiki-logo" src={apikiLogo} alt="Apiki logo" />
        </Link>

        <a href="https://apiki.com/" target="_blank" rel="noreferrer">
          <img src={worldLogo} alt="Apiki website" />
        </a>
      </div>

      {open && <Menu />}
    </header>
  )
}

export default Header
