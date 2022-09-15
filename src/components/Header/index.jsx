import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Header = () => {
  return(
    <Link className="links" to="/"><h1 id='header'>Desafio - Front-end Developer</h1></Link>
  )
}

export default Header