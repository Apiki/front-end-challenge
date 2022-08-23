import { api } from '../../api';

export async function singlePost(single) {
    try {
        const data = await api.get(`/posts?_embed&slug=${single}`);

        return {
            success: true,
            message: 'Post encontrado',
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