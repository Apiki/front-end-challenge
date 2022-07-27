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