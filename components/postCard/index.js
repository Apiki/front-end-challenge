/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { Card, Description } from './style';

export default function PostCard(prop) {
  const { image, title, slug, author, description } = prop.info;
  const router = useRouter()

  const handleClick = () => router.push(`/blog/${slug}`)

  return (
    <Card>
      <img src={image} alt={title} onClick={handleClick} />
      <div onClick={handleClick}>
        <h2>{title}</h2>
        <p>{`Por ${author}`}</p>
        <Description>{description}</Description>
      </div>
    </Card>
  )
}