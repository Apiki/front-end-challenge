export const blogApikiFirstApi = () => (
  fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then((response) => (
      response.json()
        .then((json) => {
          if (response.ok) return Promise.resolve(json);
          return Promise.reject(json);
        })
    ))
);

export const testHeader = () => (
  fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then((res) => res.headers)
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
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas`
  )
    .then((response) => (
      response.json()
        .then((json) => {
          if (response.ok) return Promise.resolve(json);
          return Promise.reject(json);
        })
    ))
)
