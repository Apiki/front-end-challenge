import api from "../services/api"

import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export const getPosts = async (page: number) => {
  const { data, headers } = await api.get("", {
    params: {
      page,
    },
  })

  const posts = data.map(post => {
    const description = post.excerpt.rendered
      .replace("<p>", "")
      .replace("</p>", "")

    const createdAt = format(new Date(post.date), "d MMM, yyyy", {
      locale: ptBR,
    })

    const thumbnail = post._embedded["wp:featuredmedia"]
      ? post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
          .source_url
      : null

    return {
      id: post.id,
      title: post.title.rendered,
      description:
        description.length > 120
          ? description.substr(0, 120) + " ..."
          : description,
      thumbnail,
      createdAt,
      slug: post.slug,
      author: post._embedded.author[0].name
        ? post._embedded.author[0].name
        : null,
    }
  })

  const totalPages = headers["x-wp-totalpages"]

  return { posts, totalPages }
}
