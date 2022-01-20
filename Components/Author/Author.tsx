import * as S from './Author.styles';
import { Author as AuthorType } from '../../types/Author';

export const Author = ({ className, name, avatar_urls, size }: AuthorType) => {
  return (
    <S.Author className={className}>
      {avatar_urls && <S.Image src={avatar_urls[size]} alt={name} size={size} />}
      <S.Name>{name}</S.Name>
    </S.Author>
  )
}