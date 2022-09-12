import Image from 'next/image'
import Link from 'next/link'
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
        <Link href={`post/${slug}`}>{slug}</Link>
      </CardContent>
    </CardContainer>
  )
}
