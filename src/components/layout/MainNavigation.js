import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {

    return (
      <header className={classes.header}>
        <div className={classes.logo}>Desafio Front End</div>
        <nav>
          <ul>
            <li><NavLink to='/'>Pagina Inicial</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default MainNavigation;
  