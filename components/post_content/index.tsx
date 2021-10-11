import { IPost } from '../../types/post'
import { GetDate } from '../../utils/getDateAndHour'
import { Container, Content, PostSubtitle, Wrapper } from './styles'

interface PostContentProps {
  post: IPost
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <Container>
      <Wrapper>
        <h1>{post.title}</h1>
        <PostSubtitle dangerouslySetInnerHTML={{ __html: post.resume }} />
        <span>{GetDate(post.createdAt)}</span>
        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </Wrapper>
    </Container>
  )
}

export default PostContent
