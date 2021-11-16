import React from 'react'

import NotFoundIcon from '../imgs/icons/notFound.svg'

import '../css/NotFound.css'

function NotFound () {
  return (
    <div className="not-found">
      <img src={NotFoundIcon} alt="404 Not Found" />
      <h1>404 - Página não encontrada.</h1>
    </div>
  )
}

export default NotFound
