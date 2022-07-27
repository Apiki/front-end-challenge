import { format, parseISO } from "date-fns";

/**
 * 
 * @param {object} postEmbed - Possui o objeto de imagens
 * @returns 
 */
 export const handlePostCardImage = (postEmbed) => {
    if(!postEmbed) return '';
    if(!postEmbed["wp:featuredmedia"]) return '';
    if(!postEmbed["wp:featuredmedia"][0]) return '';
    if(!postEmbed["wp:featuredmedia"][0].yoast_head_json?.og_image[0]) return '';
    if(!postEmbed["wp:featuredmedia"][0].yoast_head_json?.og_image[0].url) return ''

    return postEmbed["wp:featuredmedia"][0].yoast_head_json?.og_image[0].url;   
}

/**
 * Formata a data
 * @param {Date} date 
 * @returns 
 */
export const formateDate = (date) => {
    return format(
        parseISO(new Date(date)), 
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'"
      )
}