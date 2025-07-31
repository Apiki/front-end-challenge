import type { PostListType } from "~types";
import { api, ENDPOINT, PARAM } from "./constants";

export const getPostsResponse = async (page: number) => {
    const { data, headers } = await api.get<PostListType>(ENDPOINT.posts, {
        params: {
            [PARAM.embed]: true,
            [PARAM.category]: 518,
            page
        }
    });

    return {
        data,
        headers: {
            "x-wp-total": headers["x-wp-total"],
            "x-wp-totalpages": headers["x-wp-totalpages"]
        }
    };
};

export const getPost = async (slug: string) =>
    await api
        .get<PostListType>(ENDPOINT.posts, {
            params: {
                [PARAM.embed]: true,
                slug
            }
        })
        .then((response) => response.data);
