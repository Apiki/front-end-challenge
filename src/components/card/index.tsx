import React, { useContext, useState } from 'react'
import styles from './styes.module.scss'
import { CardItems } from '../cardItems'
import { PageContext } from '../../context'

export const Card: React.FC = () => {
  const [btnDisable, setBtnDisable] = useState(false)
  const { post, nextPage, btnNextPageOff } = useContext(PageContext)

  function isTimeDisable() {
    setBtnDisable(true)
    setTimeout(() => {
      setBtnDisable(false)
    }, 800)
  }

  return (
    <>
      <section className={styles.container}>
        {post.map(({ title, link, urlImg, slug }) => (
          <CardItems key={title} {...{ title, link, urlImg, slug }} />
        ))}
      </section>
      <div className={styles.btnContainer}>
        <button
          className={styles.button}
          disabled={btnNextPageOff || btnDisable}
          onClick={() => {
            nextPage()
            isTimeDisable()
          }}
          type="button"
        >
          Carregar mais...
        </button>
      </div>
    </>
  )
}
