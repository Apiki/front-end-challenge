import { useInfiniteQuery } from 'react-query'
import api from '../fetcher'
import type { PostRaw } from './types'

type GetPostsResponse = {
  posts: PostRaw[]
  nextPage?: number
}

async function getPosts (page: number): Promise<GetPostsResponse> {
  return api
    .get<PostRaw[]>('posts', {
      params: {
        _embed: true,
        categories: 518,
        page,
      },
    })
    .then((response) => {
      const totalPagesCount = Number(response.headers['x-wp-totalpages'])
      const hasNextPage = page + 1 <= totalPagesCount

      return {
        posts: response.data,
        nextPage: hasNextPage ? page + 1 : undefined,
      }
    })
}

export function usePosts () {
  const { data, ...rest } = useInfiniteQuery<GetPostsResponse>({
    queryKey: ['posts'],
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
  })

  return {
    pages: data?.pages.map((page) =>
      page.posts.map((post) => ({
        thumbnail: post._embedded['wp:featuredmedia'][0]?.source_url,
        id: post.id,
        title: post.title.rendered,
        link: post.link,
      })),
    ),
    ...rest,
  }
}
