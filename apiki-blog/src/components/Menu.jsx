import React from 'react'

import ContentLinks from './ContentLinks'
import SocialLinks from './SocialLinks'

import '../css/Menu.css'

function Menu () {
  return (
    <div id="menu">
      <ContentLinks />
      <SocialLinks />
    </div>
  )
}

export default Menu
