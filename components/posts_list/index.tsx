import Link from 'next/link'

import PostCard from '../post_card'

import { ButtonWrapper, Container, SeeMoreButton } from './styles'

import { IPost } from '../../types/post'

interface PostListProps {
  posts: IPost[]
  loading: boolean
  noMorePosts: boolean
  seeMore(): void
}

const PostsList: React.FC<PostListProps> = ({ posts, loading, seeMore, noMorePosts }) => {
  return (
    <>
      <Container>
        {posts.map((item) => (
          <Link href={`/${item.slug}`} key={item.id}>
            <a>
              <PostCard post={item} />
            </a>
          </Link>
        ))}
      </Container>
      <ButtonWrapper>
        {!noMorePosts && (
          <SeeMoreButton onClick={seeMore} disabled={loading}>
            {loading ? 'Carregando...' : 'Ver mais'}
          </SeeMoreButton>
        )}
      </ButtonWrapper>
    </>
  )
}

export default PostsList
