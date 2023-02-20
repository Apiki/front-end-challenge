import { format } from "date-fns";
import parseISO from 'date-fns/parseISO';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = date => {
  const parsed = parseISO(date);
  const formatedDate = format(parsed, "dd 'de' MMMM 'de' yyyy", {locale: ptBR});

  return formatedDate;
}