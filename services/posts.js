import { api } from './index';

/**
 * 
 * @param {int} id - Id da categoria
 * @param {int} page - Número da página corrente
 * @returns 
 */
 export const getCategoryPosts = (id, page) => {
    return api.get(`/wp/v2/posts?_embed&categories=${id}&page=${page}`).then((res) => res.json());
}

export const getPostDetails = (slug) => {
    return api.get(`/wp/v2/posts?_embed&slug=${slug}`).then((res) => res.json());
}