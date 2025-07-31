import type { PostListType } from "~types";

export interface IContent {
    pagination: {
        page: number;
        totalPages: number;
    };
    data: {
        posts: PostListType;
        totalPosts: number;
        loadedPosts: number;
        batchSize: number;
    };
}
