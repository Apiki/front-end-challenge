import * as S from './Tags.styles';
import { Tag } from 'types/Tag';

export const Tags = ({ tags }: { tags: [Tag] }) => <S.Tags>{tags.map(({name}: Tag) => <S.Tag key={name}>{name}</S.Tag> )}</S.Tags>;