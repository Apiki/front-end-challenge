export default function apiSlug(slug) {
  return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`).then((e) =>
    e.json()
  ).then(e=>e[0]);
}
