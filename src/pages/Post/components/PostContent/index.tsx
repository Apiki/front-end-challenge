import { IPost } from '../../../home'
import { PostContentContainer } from './styles'

interface PostContentProps {
  post: IPost
}

export function PostContent({ post }: PostContentProps) {
  return (
    <PostContentContainer>
      {post.map(post => {
        return (
          <div key={post.id}>
            <div>
              <img
                width="100%"
                src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
              />
            </div>
            <div>
              <h1>{post.title.rendered}</h1>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>
        )
      })}
    </PostContentContainer>
  )
}
