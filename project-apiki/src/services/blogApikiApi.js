const url = 'https://blog.apiki.com/wp-json/wp/v2/';

const blogApikiapi = () => (
  fetch(url)
  .then((response) => (
    response.json()
    .then((json) => {
      if (response.ok) return Promise.resolve(json);
      return Promise.reject(json);
    })
  ))
);

export default blogApikiapi;
