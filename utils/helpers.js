import { format } from "date-fns";

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

export const handleSingleFeaturedImage = (postEmbed) => {
    if(!postEmbed) return '';
    if(!postEmbed?._embedded) return '';
    if(!postEmbed?._embedded["wp:featuredmedia"]) return '';
    if(!postEmbed?._embedded["wp:featuredmedia"][0]) return '';
    if(!postEmbed?._embedded["wp:featuredmedia"][0].source_url) return '';

    return postEmbed?._embedded["wp:featuredmedia"][0].source_url;
}

/**
 * Formata a data
 * @param {Date} date 
 * @returns 
 */
export const formateDate = (date) => {
    return format(
        new Date(date), 
        "dd/MM/yyyy"
      )
}