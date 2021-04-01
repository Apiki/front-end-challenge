let pageNumber = 2;
let xhr = new XMLHttpRequest();
let response = null;
let totalPages = 0;
let over = false;

const getMore = () => {
  if (over) {
    alert('Sem mais páginas');
    return [];
  }
  return new Promise(function (resolve, reject) {
    xhr.open('get', `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNumber}`);
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (totalPages === 0) totalPages = xhr.getResponseHeader('x-wp-totalpages');
      console.log(totalPages);
      console.log(pageNumber);
      if (pageNumber <= totalPages) pageNumber++;
      if (pageNumber > totalPages) over = true;
      response = xhr.response;
      let status = xhr.status;
      if (status === 200) {
        resolve(response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
}

export default getMore;
