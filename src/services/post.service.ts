import { responseStatus, useHandleRequest } from "../api/api-request.service";
import type { PostInterface } from "../models/post.interface";

export const PostQueries = {
    EDIT: "post_EDIT",
    CREATE: "post_CREATE",
    DELETE: "post_DELETE",
    GET_ALL: "post_GET_ALL",
}

export function usePostService() {
    const handleRequest = useHandleRequest();

    async function getAllPost(page: number = 1): Promise<{ posts: PostInterface[]; totalPages: number } | undefined> {
        const { status, data, headers } = await handleRequest.handleRequest(
            `/posts?_embed&categories=518&page=${page}`, 
            'GET'
        );

        if (status === responseStatus.SUCCESS) {
          
            const totalPages = parseInt(headers?.['x-wp-totalpages'] || '1', 10);
         

            return {
                posts: data,
                totalPages: totalPages,
              
            };
        }
    }

    async function getPostBySlug(slug: string): Promise<PostInterface[] | undefined> {
        const { status, data } = await handleRequest.handleRequest(
            `/posts?_embed&slug=${slug}`,
            'GET'
        );

        if (status === responseStatus.SUCCESS) {
            return data;
        }
    }

    return {
        getAllPost,
        getPostBySlug
    }
}