import { useState } from 'react'
import { usePosts } from 'src/client/usePosts/usePosts'
import { Header } from 'src/ui'

import * as S from './Home.styled'

export function Home () {
  const { posts } = usePosts()

  console.log(posts)

  return (
    <S.Content>
      <Header />
      <h2>Desenvolvimento</h2>
      <S.ContainerMain>
        <ul>
          {posts.map((post) => (
            <li>
              <img src={post.thumbnail} alt='' />
            </li>

          ))}
        </ul>
      </S.ContainerMain>
    </S.Content>
  )
}
