import { useState } from 'react'
import { usePosts } from 'src/client/usePosts/usePosts'
import { Header } from 'src/ui'

import * as S from './Home.styled'

export function Home () {
  const { posts } = usePosts()

  console.log(posts)

  return (
    <>
      <Header />
      <S.ContainerMain>
        <h1>Desenvolvimento</h1>

        <ul>
          {posts.map((post) => (
            <li>
              <img src={post.thumbnail} alt='' />
            </li>

          ))}
        </ul>
      </S.ContainerMain>
    </>
  )
}
