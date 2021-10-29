import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/logo-apiki-site-01.webp'
import styles from './styles.module.scss'

export const Header: React.FC = () => {
  const [btnFavoriteDisable, setBtnFavoriteDisable] = useState(false)

  function checkBtn() {
    const getLocalStorage = JSON.parse(
      localStorage.getItem('blogApiki:favorite') || '[]'
    )
    if (getLocalStorage.length === 0) {
      setBtnFavoriteDisable(true)
    } else {
      setBtnFavoriteDisable(false)
    }
  }

  useEffect(() => {
    checkBtn()
  }, [])

  const history = useHistory()
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          type="button"
          onClick={() => history.push('/home')}
          className={styles['nav-item']}
        >
          Home
        </button>
        <button
          disabled={btnFavoriteDisable}
          type="button"
          onClick={() => history.push('/favoritos')}
          className={styles['nav-item']}
        >
          Posts Favoritos
        </button>
      </nav>
      <div className={styles.logo}>
        <img src={Logo} alt="logo-apiki" />
      </div>
    </header>
  )
}
