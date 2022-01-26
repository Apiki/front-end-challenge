import { Link } from 'react-router-dom'
import { usePosts } from 'src/client/usePosts/usePosts'
import { Header } from 'src/ui'

import * as S from './Home.styled'

export function Home () {
  const { posts } = usePosts()

  return (
    <S.Content>
      <Header />
      <h2>Desenvolvimento</h2>
      <S.ContainerMain>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <img src={post.thumbnail} alt={post.title} />
              <h3>{post.title}</h3>
              <Link to={`${post.link}`}>Ver mais</Link>
            </li>

          ))}
        </ul>
      </S.ContainerMain>
    </S.Content>
  )
}
