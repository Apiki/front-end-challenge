import React from 'react'

import apikiLogo from '../imgs/apiki.png'

import '../css/Header.css'

function Header () {
  return (
    <header id="header">
      <div id="header-container">
        <img id="apiki-logo" src={apikiLogo} alt="Apiki logo" />
      </div>
    </header>
  )
}

export default Header
