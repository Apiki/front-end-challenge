import { useQuery } from "@tanstack/react-query";
import { ENDPOINT, getPostsResponse } from "~services";
import type { IPostsResponse } from "~types";

export const usePostsResponse = (page: number) =>
    useQuery<IPostsResponse>({
        queryKey: [ENDPOINT.posts, page],
        queryFn: () => getPostsResponse(page),
        retry: false,
        refetchOnWindowFocus: false
    });
