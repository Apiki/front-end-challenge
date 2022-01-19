/**
 * @author   : Matheus de Castro Sousa
 * @since    : React 17.0.2
 * Date      : 2022-01-19
 * Porpouse  : Page for home 
 * React usage : Link to router-dom 
 */


import { Link } from 'react-router-dom';
import './index.scss';


export default function Home() {
  return (

    <div className="Home">
      <h1>Blog da Apiki</h1>

      <Link to={'/posts'} >
        <button type="button">
          Seguir para Postagens
        </button></Link>
    </div>


  );
}

