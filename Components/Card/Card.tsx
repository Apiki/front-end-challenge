import * as S from './Card.styles';
import Parser from 'html-react-parser';
import Link from 'next/link';
import { Tags } from 'Components/Tags/Tags';
import { CategoryWithDate } from 'Components/CategoryWithDate/CategoryWithDate';
import { Card as CardType } from 'types/Card';
import { Author } from 'types/Author';

export const Card = ({ post }: CardType) => {
  const imageURL = !!post._embedded['wp:featuredmedia']?.length && post._embedded['wp:featuredmedia'][0].source_url; 
  const authors = post._embedded.author;
  const [categories, tags] = post._embedded['wp:term'];
  const title = post.title.rendered;
  const excerpt = Parser(post.excerpt.rendered);

  return (
    <Link href={`/${encodeURIComponent(post.slug)}`}>
      <S.Card>
        {imageURL && <S.Image src={imageURL} alt={title} />}
        <CategoryWithDate date={post.date} categories={categories} />
        <Tags tags={tags} />
        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>
        { authors
          .filter((author: Author) => !!author.name)
          .map((author: Author) => <S.Author key={author.name} {...author} size={48} /> )
        }
      </S.Card>
    </Link>
  )
}