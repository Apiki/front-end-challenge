/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IPost } from '../types/post'

export default function transformToPost(data: any): IPost {
  return {
    author: {
      id: data?._embedded?.author[0]?.id || 0,
      name: data?._embedded?.author[0]?.name || 'Desconhecido',
      description: data?._embedded?.author[0]?.description || 'Desconhecido',
      avatar: data?._embedded?.author[0]?.avatar_urls
        ? Object.values(data?._embedded?.author[0]?.avatar_urls)[2]
        : '',
    },
    content: data?.content?.rendered,
    resume: data?.excerpt?.rendered,
    id: data?.id,
    image: Object.keys(data._embedded)
      .map(
        (itm) =>
          itm === 'wp:featuredmedia' &&
          data._embedded[itm][0]?.media_details?.sizes?.full?.source_url
      )
      .filter((image) => typeof image !== 'boolean')[0],
    createdAt: data?.date,
    slug: data?.slug,
    title: data?.title?.rendered,
  }
}
