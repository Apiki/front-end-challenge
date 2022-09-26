import { IPost } from '../../pages/home'
import { relativeDateFormatter } from '../../utils/formatter'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.modified_gmt)

  return (
    <PostContainer to={`/Post/${post.slug}`}>
      <div>
        <strong>{post.title.rendered}</strong>
        <span>{formattedDate}</span>
      </div>
      <img
        src={post._embedded['wp:featuredmedia']?.map(
          (url: { source_url: any }) => url.source_url
        )}
        alt={post.title.rendered}
        key={post.slug}
      />
    </PostContainer>
  )
}
