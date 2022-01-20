import * as S from './CategoryWithDate.styles';
import { CategoryWithDate as CategoryWithDateType } from 'types/CategoryWithDate';
import { format } from 'date-fns';

export const CategoryWithDate = ({ categories, date }: CategoryWithDateType ) => {
  const formatedDate = format(new Date(date), 'dd/MM/yyyy');

  return <S.CategoryWithDate>{categories[0]?.name} - {formatedDate}</S.CategoryWithDate>
};