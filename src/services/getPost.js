const urlPost = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';

const getPost = (slug) => {
  return fetch(urlPost + slug)
  .then((response) => response.json().then(
    (data) => (
      response.ok ? Promise.resolve(data) : Promise.reject(data)),
  ),
  );
    }

export default getPost;
