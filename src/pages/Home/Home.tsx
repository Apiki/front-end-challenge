import { Link } from 'react-router-dom'
import { usePosts } from 'src/client/usePosts/usePosts'
import { Header } from 'src/ui'

import * as S from './Home.styled'

export function Home () {
  const { posts } = usePosts()

  return (
    <S.Content>
      <Header />
      <h2>Development</h2>
      <S.ContainerMain>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <img src={post.thumbnail} alt={post.title} />
              <h3>{post.title}</h3>
              <Link to={`${post.link}`}>View more</Link>
            </li>
          ))}
        </ul>
      </S.ContainerMain>
    </S.Content>
  )
}
