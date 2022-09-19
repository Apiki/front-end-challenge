import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const BASE_URL ="https://blog.apiki.com/wp-json/wp/v2/posts?_embed"

export function dateFormat(date: string) {

    const dateIso = parseISO(date);

    const formattedDate = format(
        dateIso, 
        "dd 'de' MMMM 'de' yyyy, 'às' HH:mm'h'",
        { locale: ptBR }
    );

    return formattedDate;
}