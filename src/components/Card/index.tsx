import { Link } from 'react-router-dom'
import { CardContainer, CardContent } from './style'

interface CardProps {
  imgURl: string
  title: string
  slug: string
}

export function Card({ imgURl, title, slug }: CardProps) {
  return (
    <CardContainer>
      <img src={imgURl} alt="" />
      <CardContent>
        <h3>{title}</h3>
        <Link to={`post/${slug}`}>{slug}</Link>
      </CardContent>
    </CardContainer>
  )
}
