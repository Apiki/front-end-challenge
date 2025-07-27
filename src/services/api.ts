import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPosts(page: number = 1) {
    try {
        const res = await fetchWithTimeout(
            `${baseUrl}/posts?_embed&categories=518&page=${page}`,
            {},
            8000
        );

        if (!res.ok) {
            throw new Error(`Erro ao buscar posts: ${res.status}`);
        }

        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
        const data = await res.json();

        return { data, totalPages };
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return { data: [], totalPages: 1 };
    }
}

export async function fetchPostBySlug(slug: string) {
    try {
        const res = await fetchWithTimeout(
            `${baseUrl}/posts?_embed&slug=${slug}`,
            {},
            8000
        );

        if (!res.ok) throw new Error('Erro ao buscar post');

        const data = await res.json();
        return data[0] || null;
    } catch (error) {
        console.error('Erro na requisição:', error);
        return null;
    }
}