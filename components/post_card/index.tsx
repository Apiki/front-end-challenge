import { IPost } from '../../types/post'
import { GetDate } from '../../utils/getDateAndHour'
import { Card, ContentWrapper, ImageWrapper } from './styles'

interface IPostCard {
  post: IPost
}

const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <Card>
      <ImageWrapper image={post.image} />
      <ContentWrapper>
        <h3>{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.resume }} />
        <span>{GetDate(post.createdAt)}</span>
      </ContentWrapper>
    </Card>
  )
}

export default PostCard
