const urlList = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

const getAll = () => fetch(urlList)
.then((response) => response.json().then(
    (data) => (
      response.ok ? Promise.resolve(data) : Promise.reject(data)),
    ),
  );

export default getAll;
