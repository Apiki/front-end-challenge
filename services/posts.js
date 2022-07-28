import { api } from './index';

/**
 * Retorna a lista de posts da categoria
 * 
 * @param {int} id - Id da categoria
 * @param {int} page - Número da página corrente
 * @returns 
 */
 export const getCategoryPosts = (id, page) => {
    return api.get(`/posts?_embed&categories=${id}&page=${page}`).then((res) => res);
}

/**
 * Retorna detalhes do post
 * 
 * @param {string} slug - Slug do post
 * @returns 
 */
export const getPostDetails = (slug) => {
    return api.get(`/posts?_embed&slug=${slug}`).then((res) => res);
}