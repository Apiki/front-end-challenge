import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../context'
import { FcCheckmark } from 'react-icons/fc'
import styles from './styles.module.scss'

export const ButtonFavorite = () => {
  const { isFavorite } = useContext(PageContext)
  const [favorite, setFavorite] = useState(false)
  const [btnDisable, setBtnDisable] = useState(true)

  function checkFavorite() {
    const getLocalStorage = JSON.parse(
      localStorage.getItem('blogApiki:favorite') || '[]'
    )

    if (
      getLocalStorage &&
      getLocalStorage.some((el: any) => el.title === isFavorite.title)
    ) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
  }

  function onClickFavorite() {
    const getLocalStorage = JSON.parse(
      localStorage.getItem('blogApiki:favorite') || '[]'
    )
    getLocalStorage.push(isFavorite)
    localStorage.setItem('blogApiki:favorite', JSON.stringify(getLocalStorage))
    checkFavorite()
  }

  function onClickUnfavorite() {
    const getLocalStorage = JSON.parse(
      localStorage.getItem('blogApiki:favorite') || '[]'
    )
    const newDataStorage = getLocalStorage.filter(
      (el: any) => el.title !== isFavorite.title
    )
    localStorage.setItem('blogApiki:favorite', JSON.stringify(newDataStorage))
    checkFavorite()
  }

  useEffect(() => {
    checkFavorite()
    if (Object.keys(isFavorite).length === 4) {
      setBtnDisable(false)
    }
  }, [])

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={btnDisable}
        type="button"
        onClick={favorite ? onClickUnfavorite : onClickFavorite}
      >
        {favorite ? 'Unfavorite' : 'Favorite'} {<FcCheckmark size={30} />}
      </button>
    </div>
  )
}
