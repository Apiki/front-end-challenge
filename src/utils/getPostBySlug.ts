import api from "../services/api"

import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export const getPostBySlug = async (slug: string) => {
  try {
    const { data } = await api.get("", {
      params: {
        slug,
      },
    })

    const description = data[0].excerpt.rendered
      .replace("<p>", "")
      .replace("</p>", "")

    const createdAt = format(new Date(data[0].date), "d MMM, yyyy", {
      locale: ptBR,
    })

    const thumbnail = data[0]._embedded["wp:featuredmedia"]
      ? data[0]._embedded["wp:featuredmedia"][0].media_details.sizes
          .medium_large.source_url
      : null

    const post = {
      title: data[0].title.rendered,
      description,
      content: data[0].content.rendered,
      thumbnail,
      createdAt,
      author: data[0]?._embedded.author[0].name
        ? data[0]._embedded.author[0].name
        : null,
      authorAvatar: data[0]?._embedded.author[0].name
        ? data[0]._embedded.author[0].avatar_urls["48"]
        : null,
    }

    return post
  } catch (err) {
    return {}
  }
}
