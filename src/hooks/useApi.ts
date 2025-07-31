import { useQuery } from "@tanstack/react-query";
import { ENDPOINT, getPost, getPostsResponse } from "~services";
import type { IPostsResponse, PostListType } from "~types";

export const usePostsResponse = (page: number) =>
    useQuery<IPostsResponse>({
        queryKey: [ENDPOINT.posts, page],
        queryFn: () => getPostsResponse(page),
        retry: false,
        refetchOnWindowFocus: false
    });

export const usePost = (slug: string) =>
    useQuery<PostListType>({
        queryKey: ["post", slug],
        queryFn: () => getPost(slug),
        retry: false,
        refetchOnWindowFocus: false
    });
