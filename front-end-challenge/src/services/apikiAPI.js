export const apikiAPI = () => (
  fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export function apikiPagesAPI(page) {
  return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`);
}

export const apikiInternaAPI = (slug) => (
  fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
