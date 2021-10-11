import { Container } from './styles'

export interface PostHeroProps {
  image: string
}

const PostHero: React.FC<PostHeroProps> = ({ image }) => {
  return <Container image={image} />
}

export default PostHero
