export const getArticlesList = async (url) => {
  if (url) {
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
      .then(() => ({ total, totalPages, content }))
      .catch((error) => error);
  }
};

export const getArticle = async (url) => {
  if (url) {
    const URL_TO_FETCH = url;
    let article;
    return fetch(URL_TO_FETCH)
      // .then((response) => response)
      .then((data) => data.json())
      .then((dataJson) => {
        article = dataJson;
      })
      .then(() => (article))
      .catch((error) => error);
  }
};
