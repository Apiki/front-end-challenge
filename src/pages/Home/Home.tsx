import { Link } from 'react-router-dom'

import { usePosts } from 'src/client/usePosts/usePosts'
import { Footer, Header } from 'src/ui'
import { ButtonBackTop } from 'src/ui/components/ButtonBackTop'

import * as S from './Home.styled'

export function Home () {
  const { pages, fetchNextPage } = usePosts()

  return (
    <S.Content>
      <Header />
      <h2>Development</h2>
      <S.ContainerMain>
        <ul>
          {pages?.map((posts) => {
            return posts.map((post) => (
              <S.List key={post.id}>
                <img src={post.thumbnail} alt={post.title} />
                <h3>{post.title}</h3>
                <Link to={`${post.link}`}>View more</Link>
              </S.List>
            ))
          })}
        </ul>
      </S.ContainerMain>
      <S.ButtonLoadMore>
        <button onClick={() => fetchNextPage()}>Carregar mais posts</button>
      </S.ButtonLoadMore>
      <ButtonBackTop />
      <Footer />
    </S.Content>
  )
}
