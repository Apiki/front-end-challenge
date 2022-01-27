import { Link } from 'react-router-dom'
import { usePosts } from 'src/client/usePosts/usePosts'
import { Header } from 'src/ui'
import { FiArrowUp } from 'react-icons/fi'

import * as S from './Home.styled'

export function Home () {
  const { posts } = usePosts()

  const goBackTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <S.Content>
      <Header />
      <h2>Development</h2>
      <S.ContainerMain>
        <ul>
          {posts.map((post) => (
            <S.List key={post.id}>
              <img src={post.thumbnail} alt={post.title} />
              <h3>{post.title}</h3>
              <Link to={`${post.link}`}>View more</Link>
            </S.List>
          ))}
        </ul>
      </S.ContainerMain>
      <button
        title='Voltar ao topo'
        onClick={() => goBackTop()}
      >
        <FiArrowUp />
      </button>
    </S.Content>
  )
}
