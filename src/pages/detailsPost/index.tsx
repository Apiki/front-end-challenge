import React, { useEffect, useState, Suspense } from 'react'
import { RouterProps, useParams } from 'react-router-dom'
import Parser from 'react-html-parser'
import styles from './styles.module.scss'
import { getDetailPost, PostDetails } from '../../hooks'
import { ButtonFavorite, Header } from '../../components'

export const DetailsPost: React.FC<RouterProps> = () => {
  const [data, setData] = useState<PostDetails>()
  const { slug } = useParams<{ slug: string }>()

  async function getDetails() {
    console.log(slug)
    const result = await getDetailPost(slug)
    setData(result)
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
      <Header />
      <Suspense fallback={data ? <h1>Loading....</h1> : ''}>
        {data && (
          <section className={styles.container}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>{data?.title}</h1>
                <h4>{data?.subtitle}</h4>
              </div>
              <div className={styles.htmlParse}>
                {Parser(data?.content || '')}
              </div>
            </div>
            <aside className={styles.author}>
              <div>
                <h3>Author</h3>
              </div>
              <div className={styles.authorPerfil}>
                <img src={data?.author.avatar?.['48'] || '#'} />
                <span>{data?.author.name}</span>
              </div>
              <p>{data?.author.description}</p>
              <ButtonFavorite />
            </aside>
          </section>
        )}
      </Suspense>
    </>
  )
}
