import * as S from './Post.styles';
import { useRouter } from 'next/router'
import Parser from 'html-react-parser';
import { Author } from 'Components/Author/Author';
import { CategoryWithDate } from 'Components/CategoryWithDate/CategoryWithDate';
import { Tags } from 'Components/Tags/Tags';
import { Author as AuthorType } from 'types/Author';
import { PostPage } from 'types/Post';

export const Post = ({ post, error }: PostPage) => {
  const router = useRouter()

  if (router.isFallback) {
    return <S.Post><S.Title>Carregando artigo, por favor aguarde...</S.Title></S.Post>
  }
  
  if (error) {
    return <S.Post><S.Title>Tivemos um problema para recuperar o seu artigo, por favor confira a URL e tente novamente...</S.Title></S.Post>
  }

  const title = post?.title?.rendered;
  const imageURL = !!post?._embedded['wp:featuredmedia']?.length && post._embedded['wp:featuredmedia'][0].source_url; 
  const content = Parser(post?.content?.rendered || '');
  const authors = post?._embedded.author;
  const [categories, tags] = post?._embedded['wp:term'];

  return (
    <S.Post>
      {imageURL && <S.Image src={imageURL} alt={title} />}
      <CategoryWithDate date={post?.date} categories={categories} />
      <Tags tags={tags} />
      { authors
        .filter((author: AuthorType) => !!author.name)
        .map((author: AuthorType) => <Author key={author.name} {...author} size={96} /> )
      }
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Post>
  )
}