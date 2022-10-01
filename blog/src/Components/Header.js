import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Apiki } from '../Assets/marca-apiki-blog.svg'

export const Header = () => {

  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} `}>
        <Link className={styles.logo} to="/" aria-label="Logo - Home">
          <Apiki />
        </Link>
      </nav>
    </header>
  )
}
