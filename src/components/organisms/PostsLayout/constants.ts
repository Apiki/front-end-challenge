import type { IContent } from "./types";

export const PAGE_ONE = 1;
export const INITIAL_CONTENT: IContent = {
    pagination: {
        page: PAGE_ONE,
        totalPages: PAGE_ONE
    },
    data: {
        posts: [],
        totalPosts: 0,
        loadedPosts: 0,
        batchSize: 0
    }
};
