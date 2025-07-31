import { useCallback, useEffect, useState } from "react";
import { usePostsResponse } from "~hooks";
import { INITIAL_CONTENT, PAGE_ONE } from "./constants";

export const useController = () => {
    const [content, setContent] = useState(INITIAL_CONTENT);
    const { isLoading, isError, data } = usePostsResponse(content.pagination.page);

    const updateData = useCallback(() => {
        if (data && data.data.length > INITIAL_CONTENT.data.loadedPosts)
            setContent((previousState) => {
                const newPosts = [...previousState.data.posts, ...data.data];

                return {
                    pagination: {
                        ...previousState.pagination,
                        totalPages: Number(data?.headers["x-wp-totalpages"] ?? INITIAL_CONTENT.pagination.page)
                    },
                    data: {
                        posts: newPosts,
                        totalPosts: Number(data?.headers["x-wp-total"] ?? INITIAL_CONTENT.data.totalPosts),
                        loadedPosts: newPosts.length,
                        batchSize: data.data.length
                    }
                };
            });
    }, [data]);
    const loadNextPage = useCallback(
        () =>
            setContent((previousState) => {
                const newPage = previousState.pagination.page + PAGE_ONE;

                return {
                    ...previousState,
                    pagination: {
                        ...previousState.pagination,
                        page: newPage
                    }
                };
            }),
        []
    );

    useEffect(updateData, [updateData]);

    return { isLoading, isError, content, loadNextPage };
};
