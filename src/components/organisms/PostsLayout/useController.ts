import { useCallback, useEffect, useState } from "react";
import { usePostsResponse } from "~hooks";
import { INITIAL_CONTENT, PAGE_ONE } from "./constants";
import type { IContent } from "./types";

export const useController = () => {
    const [content, setContent] = useState(INITIAL_CONTENT);
    const { isLoading, isError, data } = usePostsResponse(content.pagination.page);

    const toggleListMode = useCallback(
        (mode?: IContent["listMode"]) =>
            setContent((previousState) => {
                const newMode = mode ?? (previousState.listMode === "loadMore" ? "pagination" : "loadMore");

                if (newMode === previousState.listMode) return previousState;

                return {
                    ...INITIAL_CONTENT,
                    listMode: newMode,
                    pagination: {
                        ...INITIAL_CONTENT.pagination,
                        page: previousState.pagination.page === 1 ? 2 : 1
                    }
                };
            }),
        []
    );
    const resetList = useCallback(
        () =>
            setContent((previousState) => ({
                ...INITIAL_CONTENT,
                pagination: {
                    ...INITIAL_CONTENT.pagination,
                    page: previousState.pagination.page === 1 ? 2 : 1
                }
            })),
        []
    );
    const updateData = useCallback(() => {
        if (data && data.data.length > INITIAL_CONTENT.data.loadedPosts)
            setContent((previousState) => {
                const newPosts =
                    previousState.listMode === "loadMore" ? [...previousState.data.posts, ...data.data] : data.data;

                return {
                    ...previousState,
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
    const changePage = useCallback(
        (page: number | "loadNextPage") =>
            setContent((previousState) => {
                const newPage = typeof page === "number" ? page : previousState.pagination.page + PAGE_ONE;

                if (newPage <= 0 || newPage > previousState.pagination.totalPages) return previousState;
                if (previousState.listMode === "pagination") window.scrollTo({ top: 0, behavior: "smooth" });

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

    return { isLoading, isError, content, toggleListMode, resetList, changePage };
};
