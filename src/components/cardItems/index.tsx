import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './styles.module.scss'

import { PostFormatted } from '../../hooks'
import { PageContext } from '../../context'

export const CardItems: React.FC<PostFormatted> = ({
  title,
  link,
  urlImg,
  slug
}: PostFormatted) => {
  const [viewCard, setViewCard] = useState(false)
  const [urlBest, setUrlBest] = useState('')
  const { setIsFavorite } = useContext(PageContext)
  const history = useHistory()

  const isImage = (url: string) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      setViewCard(true)
      setUrlBest(url)
    }
    img.onerror = () => {}
  }

  const setImage = useCallback(
    (n) => {
      if (!urlBest && n < urlImg.length) {
        const testUrl = urlImg[n]
        isImage(testUrl)
        setImage(n + 1)
      }
    },
    [urlBest, viewCard]
  )

  const onClickLink = () => {
    history.push(`/page/${slug}`)
    setIsFavorite({
      title,
      link,
      urlImg,
      slug
    })
  }

  useEffect(() => {
    setImage(0)
  }, [])

  return viewCard
    ? (
    <div onClick={onClickLink} className={styles.container}>
      <div className={styles.titleContainer}>
        <span>{title}</span>
      </div>
      <div className={styles.imgContainer}>
        <img src={urlBest} alt={title} />
      </div>
    </div>
      )
    : (
    <h1>Loading</h1>
      )
}
