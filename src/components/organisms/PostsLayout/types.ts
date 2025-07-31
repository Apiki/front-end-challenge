import type { PostListType } from "~types";

export interface IContent {
    listMode: "loadMore" | "pagination";
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
