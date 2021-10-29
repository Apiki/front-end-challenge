import React, { useEffect, useState } from 'react'
import { RouterProps, useHistory } from 'react-router-dom'
import { Header, CardItems } from '../../components'
import { PostFormatted } from '../../hooks'
import styles from './styles.module.scss'

export const Favorite: React.FC<RouterProps> = () => {
  const [posts, setPosts] = useState<PostFormatted[]>([])
  const history = useHistory()

  function getFavorite() {
    const getLocalStorage = JSON.parse(
      localStorage.getItem('blogApiki:favorite') || ''
    )
    setPosts(getLocalStorage)

    if (getLocalStorage.length === 0) {
      history.push('/home')
    }
  }

  useEffect(() => {
    getFavorite()
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Favoritos</h1>
      {posts.map(({ link, slug, title, urlImg }) => (
        <CardItems key={title} {...{ link, slug, title, urlImg }} />
      ))}
    </div>
  )
}
