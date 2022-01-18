import { Link } from 'react-router-dom';
import './index.scss';

export default function Home(){
  return (

    <div className="Home">
        <h1>OI Home</h1>

        <Link to={'/posts'} >
              <button type="button">
                Seguir para Postagens
              </button></Link>
    </div>
  
    
  );
}

