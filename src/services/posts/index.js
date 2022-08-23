import { api } from '../../api';

export async function getPosts(page = 1) {
    try {
        const data = await api.get(`/posts?_embed&categories=518&page=${page}`);

        return {
            success: true,
            message: 'Posts encontrados',
            data: data
        }
    } catch (error) {
        return {
            success: false,
            message: 'Nenhum Post encontrado',
            data: error
        }
    }
}