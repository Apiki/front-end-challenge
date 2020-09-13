export const getArticlesList = async (url) => {
  // const URL_TO_FETCH = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
  const URL_TO_FETCH = url;
  let total, totalPages, content, result;
  return fetch(URL_TO_FETCH)
    .then(response => result = response)
    .then((data) => data.json())
    .then((dataJson) => {
      content = dataJson;
      total = result.headers.get('X-WP-Total');
      totalPages = result.headers.get('X-WP-TotalPages');
    })
    .then(() => ({ total, totalPages, content }));
};
