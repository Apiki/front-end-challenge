export const blogApikiFirstApi = () => (
  fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then((response) => {
      if (response.ok) return Promise.resolve(response);
      return Promise.reject(response);
    }
    )
);

export const blogApikiFirstApiNumberPages = () => (
  fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then((res) => res.headers.get('X-WP-TotalPages'))
)

export const blogApikiLoadMoreapi = (page) => (
  fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
  )
    .then((response) => (
      response.json()
        .then((json) => {
          if (response.ok) return Promise.resolve(json);
          return Promise.reject(json);
        })
    ))
)

export const blogApikiArticleApi = (article) => (
  fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${article}`
  )
    .then((response) => (
      response.json()
        .then((json) => {
          if (response.ok) return Promise.resolve(json);
          return Promise.reject(json);
        })
    ))
)
